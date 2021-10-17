import '../../global.css'

import {Card, Button, Col, Row, message} from 'antd'
import {AppstoreAddOutlined} from '@ant-design/icons';
import Chart from "./Chart";

import {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'


function StockChart() {
    const [charts, setCharts] = useState([])
    const chartIndex = useSelector(state => state.chartIndex)
    const stocks = useSelector(state => state.stocks)
    const quickSearch = useSelector(state => state.quickSearch)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!quickSearch) {
            setCharts([])
            return
        }
        const tempCharts = []
        tempCharts.push(<Col key='1' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='1' report='zyzb' defaultIndicator='jzcsyl' chartType='line'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='2' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='2' report='zyzb' defaultIndicator='jlrtbzz' chartType='line'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='3' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='3' report='lrb' defaultIndicator='jbmgsy' chartType='bar'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='4' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='4' report='zyzb' defaultIndicator='zzcbcl' chartType='line'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='5' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='5' report='zyzb' defaultIndicator='xsmll' chartType='line'/>
            </Card>
        </Col>)
        setCharts(tempCharts)
    }, [quickSearch])


    useEffect(() => {
        if (!chartIndex) {
            setCharts([])
            return
        }
        const tempCharts = []
        for (let i = quickSearch; i < chartIndex + quickSearch; i++) {
            tempCharts.push(<Col key={i} span={12}>
                <Card bordered={true} style={{width: '100%', height: 400}}>
                    <Chart chartId={i} report='zyzb' defaultIndicator=''/>
                </Card>
            </Col>)
        }
        setCharts(tempCharts)
    }, [chartIndex])


    return <div style={{width: '95%', margin: 'auto auto', padding: 20}}>
        <Row gutter={[20, 20]}>
            {charts}
            <Col span={12}>
                <Card bordered={false} style={{width: '100%', height: 400}}>
                    <div style={{width: '80%', height: 370}}>
                        <Button type='primary'
                                shape='circle'
                                style={{
                                    marginTop: 150,
                                    width: 100,
                                    height: 100,
                                    fontSize: 50
                                }}
                                onClick={async () => {
                                    if (!stocks || stocks.size === 0) {
                                        message.info('请选择标的');
                                        return
                                    }
                                    console.log(stocks)
                                    dispatch({type: 'changeChartIndex', payload: chartIndex + 1})
                                }}
                        ><AppstoreAddOutlined/></Button>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
}

export default StockChart
