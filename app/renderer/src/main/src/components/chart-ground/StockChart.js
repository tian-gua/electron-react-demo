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

    const quickSearchCharts = () => {
        const tempCharts = []
        tempCharts.push(<Col key='1' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='1' report='zyzb' defaultIndicator='jzcsyl'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='2' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='2' report='zyzb' defaultIndicator='jlrtbzz'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='3' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='3' report='lrb' defaultIndicator='jbmgsy'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='4' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='4' report='zyzb' defaultIndicator='zzcbcl'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='5' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='5' report='zyzb' defaultIndicator='xsmll'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='6' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='6' report='zyzb' defaultIndicator='zcfzl'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='7' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='7' report='zyzb' defaultIndicator='yysr'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='8' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='8' report='zyzb' defaultIndicator='kfjlr'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='9' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='9' report='lrb' defaultIndicator='yffy'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='10' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='10' report='zcfzb' defaultIndicator='hbzj'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='11' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='11' report='zcfzb' defaultIndicator='sy'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='12' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='12' report='zcfzb' defaultIndicator='cqjk'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='13' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='13' report='zcfzb' defaultIndicator='dqjk'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='14' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='14' report='zcfzb' defaultIndicator='zjgchj'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='15' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='15' report='zcfzb' defaultIndicator='fzhj'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='16' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='16' report='zcfzb' defaultIndicator='wfplr'/>
            </Card>
        </Col>)
        tempCharts.push(<Col key='17' span={12}>
            <Card bordered={true} style={{width: '100%', height: 400}}>
                <Chart chartId='17' report='zcfzb' defaultIndicator='ssgdqy'/>
            </Card>
        </Col>)
        // tempCharts.push(<Col key='18' span={12}>
        //     <Card bordered={true} style={{width: '100%', height: 400}}>
        //         <Chart chartId='18' report='xjllb' defaultIndicator='jyhdcsdxjllje' />
        //     </Card>
        // </Col>)
        // tempCharts.push(<Col key='19' span={12}>
        //     <Card bordered={true} style={{width: '100%', height: 400}}>
        //         <Chart chartId='19' report='xjllb' defaultIndicator='czhdcsdxjlje' />
        //     </Card>
        // </Col>)
        // tempCharts.push(<Col key='20' span={12}>
        //     <Card bordered={true} style={{width: '100%', height: 400}}>
        //         <Chart chartId='20' report='xjllb' defaultIndicator='tzhdcsdxjllje' />
        //     </Card>
        // </Col>)
        return tempCharts;
    }

    useEffect(() => {
        if (!quickSearch) {
            setCharts([])
            return
        }

        setCharts(quickSearchCharts())
    }, [quickSearch])


    useEffect(() => {
        if (!chartIndex) {
            setCharts([])
            return
        }
        let tempCharts = []
        if (quickSearch !== 0) {
            tempCharts = quickSearchCharts()
        }
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
                                    if (!stocks.a && !stocks.c && !stocks.c) {
                                        message.info('请选择标的');
                                        return
                                    }
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
