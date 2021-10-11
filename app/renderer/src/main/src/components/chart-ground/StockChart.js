import '../../global.css'

import {Card, Button, Col, Row, message} from 'antd'
import {AppstoreAddOutlined} from '@ant-design/icons';
import Chart from "./Chart";

import {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'


function StockChart() {
    const [cols, setCols] = useState([])
    const chartIndex = useSelector(state => state.chartIndex)
    const stocks = useSelector(state => state.stocks)
    const dispatch = useDispatch();

    useEffect(() => {
        const newCols = []
        for (let i = 1; i < chartIndex + 1; i++) {
            newCols.push(<Col key={i} span={12}>
                <Card bordered={true} style={{width: '100%', height: 400}}>
                    <Chart chartId={i} report='zyzb' defaultIndicator='jlr'/>
                </Card>
            </Col>)
        }
        setCols(newCols)
    }, [chartIndex])


    return <div style={{width: '95%', margin: 'auto auto', padding: 20}}>
        <Row gutter={[20, 20]}>
            {cols}
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
