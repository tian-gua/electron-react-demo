import '../../global.css'

import {useState, useEffect} from "react";
import * as echarts from "echarts"
import {Select, Row, Col} from "antd";
import indicatorMap from "./Indicator"

function Chart(props) {
    const [report, setReport] = useState(props.report)

    const indicatorOptions = []
    const indicators = indicatorMap[report]
    indicators.forEach(item => {
        indicatorOptions.push(<Select.Option value={item.indicatorName}>{item.indicatorCode}</Select.Option>)
    })

    const chartId = 'chart-' + props.chartId
    let indicator = props.indicator
    if (!indicatorMap[report].some(item => item.indicatorName === indicator)) {
        indicator = ''
    }

    useEffect(() => {
        console.log('渲染图表:', chartId)
        const chart = echarts.init(document.getElementById(chartId))
        chart.setOption({
                legend: {},
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '2015', '2016', '2017'],
                        ['Matcha Latte', 43.3, 85.8, 93.7],
                        ['Milk Tea', 83.1, 73.4, 55.1],
                        ['Cheese Cocoa', 86.4, 65.2, 82.5],
                        ['Walnut Brownie', 72.5, 53.8, 39.1]
                    ]
                },
                xAxis: {type: 'category'},
                yAxis: {},
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]
            }
        )
    }, [])
    return <div style={{width: '100%', height: '400px'}}>
        <Row>
            <Col span={12}>
                <Select placeholder="报表" defaultValue={props.report} style={{width: 100}} onChange={(v) => setReport(v)}>
                    <Select.Option value='zyzb'>主要指标</Select.Option>
                    <Select.Option value='lrb'>利润表</Select.Option>
                    <Select.Option value='zcfzb'>资产负债表</Select.Option>
                    <Select.Option value='xjllb'>现金流量表</Select.Option>
                </Select>
            </Col>
            <Col span={12}>
                <Select placeholder="指标" defaultValue={indicator} style={{width: 100}}>
                    {indicatorOptions}
                </Select>
            </Col>
        </Row>
        <div id={chartId} style={{width: '100%', height: '400px'}}/>
    </div>
}

export default Chart
