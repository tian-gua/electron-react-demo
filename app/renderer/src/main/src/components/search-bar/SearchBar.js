import '../../global.css'
import './SearchBar.css'

import {useState} from "react";
import {Form, Button, Select, Input, Col, Row} from 'antd'

const {Option} = Select

function SearchBar() {
    let [bk, setBk] = useState(undefined)
    let [stockA, setStockA] = useState('')
    let [stockB, setStockB] = useState('')
    let [stockC, setStockC] = useState('')

    const options = []
    for (let i = 0; i < 10; i++) {
        options.push(<Option key={i} value={i}>{i}</Option>)
    }

    return (
        <div className="search-bar">
            <Row gutter={[10, 10]}>
                <Col span={4}>
                    <Select className="bk-selector" placeholder="板块" defaultValue={bk} onChange={(v) => setBk(v)}>
                        {options}
                    </Select>
                </Col>
                <Col span={4}>
                    <Form.Item label="股票A"><Input onChange={(e) => setStockA(e.target.value)}/></Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="股票B"><Input onChange={(e) => setStockB(e.target.value)}/></Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="股票C"><Input onChange={(e) => setStockC(e.target.value)}/></Form.Item>
                </Col>
                <Col span={4}>
                    <Button style={{marginRight: 10}} onClick={() => {
                        console.log(stockA + stockB + stockC)
                    }}>快速比较</Button>
                    <Button onClick={() => console.log(bk)}>清空</Button>
                </Col>
            </Row>
        </div>
    );
}

export default SearchBar;
