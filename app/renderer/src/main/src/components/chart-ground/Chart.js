import '../../global.css'

import {useEffect} from "react";
import * as echarts from "echarts"

function Chart(props) {
    const chartId = 'chart-' + props.chartId
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
    )})
    return <div id={chartId} style={{width: '100%', height: '300px'}}/>
}

export default Chart
