import '../../global.css'

import {useSelector} from 'react-redux'
import {useState, useEffect} from "react";
import * as echarts from "echarts"
import {Select, Row, Col, message} from "antd";
import {indicator as indicatorMap, findIndicatorInfo, format} from "./Indicator"

const {ipcRenderer} = window.require('electron')

function Chart(props) {
    console.log('渲染Chart组件...')
    const stocks = useSelector(state => state.stocks)
    const yearRange = useSelector(state => state.yearRange)
    const term = useSelector(state => state.term)

    const [reportData, setReportData] = useState(undefined)
    const [report, setReport] = useState(props.report)
    const [indicator, setIndicator] = useState(props.defaultIndicator ? props.defaultIndicator : '')

    const indicatorObj = indicatorMap[report].find(item => item.indicatorCode === indicator)

    let chartType = 'bar'
    if (indicatorObj) {
        console.log(`indicatorObj = ${JSON.stringify(indicatorObj)}`)
        if (indicatorObj.unit === '%') {
            chartType = 'line'
        }
    }

    const indicatorOptions = []
    const indicators = indicatorMap[report]
    indicators.forEach(item => {
        indicatorOptions.push(<Select.Option key={item.indicatorCode}
                                             value={item.indicatorCode}>{item.indicatorName}</Select.Option>)
    })

    const chartId = 'chart-' + props.chartId

    useEffect(() => {
        if (!reportData) {
            return
        }
        console.log('渲染图表: ', chartId)
        console.log('图表数据: ', stocks, ':', reportData)

        const indicatorInfo = findIndicatorInfo(report, indicator)

        const stockNameSet = new Set()
        if (stocks.a) {
            stockNameSet.add(stocks.a.label)
        }
        if (stocks.b) {
            stockNameSet.add(stocks.b.label)
        }
        if (stocks.c) {
            stockNameSet.add(stocks.c.label)
        }
        console.log(stockNameSet)
        const series = [{type: chartType}]
        if (stockNameSet.size >= 2) {
            series.push({type: chartType})
        }
        if (stockNameSet.size >= 3) {
            series.push({type: chartType})
        }
        const chart = echarts.init(document.getElementById(chartId))
        chart.clear()
        chart.setOption({
                legend: {},
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        crossStyle: {
                            color: '#999'
                        }
                    },
                    formatter: function (params) {
                        console.log(params)
                        let str = ''
                        params.forEach(item => {
                            str += item.seriesName + ': ' + format(item.data[item.seriesName], indicatorInfo.unit) + '</br>'
                        })
                        return str
                    }
                },
                dataset: {
                    dimensions: ['term', ...stockNameSet],
                    source: [...reportData]
                },
                xAxis: {type: 'category'},
                yAxis: {
                    axisLabel: {
                        formatter: function (value, index) {
                            return format(value, indicatorInfo.unit)
                        }
                    }
                },
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: series
            }
        )
    }, [reportData])

    const selectIndicator = async (v) => {
        if (!stocks.a && !stocks.c && !stocks.c) {
            message.info('请选择标的');
            return
        }
        setIndicator(v)
        const res = await ipcRenderer.invoke('query', 'list-stocks-data', {
            stocks: stocks,
            report,
            indicator: v,
            term: term,
            yearRange
        })
        console.log('指标: ', res)
        setReportData(res)
    }

    useEffect(async () => {
        if (indicator) {
            await selectIndicator(indicator)
        }
    }, [indicator])

    return <div style={{width: '100%', height: '400px'}}>
        <Row>
            <Col span={8}>
                <Select placeholder="报表" defaultValue={props.report} style={{width: 100}}
                        onChange={(v) => {
                            setReport(v);
                            setIndicator('')
                        }}>
                    <Select.Option value='zyzb'>主要指标</Select.Option>
                    <Select.Option value='lrb'>利润表</Select.Option>
                    <Select.Option value='zcfzb'>资产负债表</Select.Option>
                    <Select.Option value='xjllb'>现金流量表</Select.Option>
                </Select>
            </Col>
            <Col span={16}>
                <Select placeholder="指标" value={indicator} style={{width: 200}} onSelect={selectIndicator}>
                    {indicatorOptions}
                </Select>
            </Col>
        </Row>
        <div id={chartId} style={{width: '100%', height: '400px'}}/>
    </div>
}

export default Chart
