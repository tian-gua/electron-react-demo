import '../../global.css'

import {useSelector} from 'react-redux'
import {useState, useEffect} from "react";
import * as echarts from "echarts"
import {Select, Row, Col, message} from "antd";
import indicatorMap from "./Indicator"

const {ipcRenderer} = window.require('electron')

function Chart(props) {
    const stocks = useSelector(state => state.stocks)
    // const reportData = useSelector(state => state.reportData)

    const [reportData, setReportData] = useState(undefined)
    const [report, setReport] = useState(props.report)
    const [indicator, setIndicator] = useState(props.defaultIndicator)
    if (!indicatorMap[report].some(item => item.indicatorCode === indicator) && indicator !== '') {
        setIndicator('')
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
        console.log('渲染图表:', chartId);
        const chart = echarts.init(document.getElementById(chartId))
        chart.setOption({
                legend: {},
                tooltip: {},
                dataset: {
                    dimensions: ['data', ...(reportData.term)],
                    source: [
                        {data: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7},
                        {data: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1},
                        {data: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5},
                        {data: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1}
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]
            }
        )
    }, [reportData])

    const selectIndicator = async (v) => {
        if (!stocks || stocks.length === 0) {
            message.info('请选择标的');
            return
        }
        setIndicator(v)
        const res = await ipcRenderer.invoke('query', 'list-stocks-data', {
            stocks: [...stocks],
            report,
            indicator: v,
            term: 'Q4'
        })
        console.log('指标: ', res)
        setReportData(res)
    }
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
