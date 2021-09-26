import '../../global.css'

import {Card, Col, Row} from 'antd'
import Chart from "./Chart";
import {useState} from "react";

function StockChart() {
    return <div style={{width: '95%', margin: 'auto auto'}}>
        <Row gutter={[20, 20]}>
            <Col span={12}>
                <Card bordered={true} style={{width: '100%', height: 400}}>
                    <Chart chartId={1} report='zyzb' indicator='Jlr'/>
                </Card>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={{width: '100%', height: 400}}/>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={{width: '100%', height: 500}}/>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={{width: '100%', height: 300}}/>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={{width: '100%', height: 300}}/>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={{width: '100%', height: 300}}/>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={{width: '100%', height: 300}}/>
            </Col>
            <Col span={12}>
                <Card bordered={true} style={{width: '100%', height: 300}}/>
            </Col>
        </Row>
    </div>
}

export default StockChart
