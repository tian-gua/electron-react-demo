import '../../global.css'
import {useState} from "react";
import {Button, Col, Divider, Input, Row, Select, message, Form} from 'antd'

const {Option} = Select

const {ipcRenderer} = window.require('electron')

function SearchBar(props) {
    let {sectorList, sectorStocks, setSectorStocks, setStockData} = props
    let [stockA, setStockA] = useState('')
    let [stockB, setStockB] = useState('')
    let [stockC, setStockC] = useState('')
    let [sector, setSector] = useState('')
    let [term, setTerm] = useState('')

    const sectorOptions = []
    if (sectorList) {
        for (const item of sectorList) {
            sectorOptions.push(<Option key={item.sectorName} value={item.sectorName}>{item.sectorName}</Option>)
        }
    }

    const stockOptions = []
    if (sectorStocks) {
        for (const item of sectorStocks) {
            stockOptions.push(<Option key={item.stockCode} value={item.stockCode}>{item.stockName}</Option>)
        }
    }

    const quickSearch = async () => {
        let stocks = []
        if (stockA) {
            stocks.push(stockA)
        }
        if (stockB) {
            stocks.push(stockB)
        }
        if (stockC) {
            stocks.push(stockC)
        }
        if (!stocks || stocks.length === 0) {
            message.info('请选择标的');
            return
        }
        const res = await ipcRenderer.invoke('query', 'list-stocks-data', {stocks, report: 'jlr'})
        setStockData(res)
    }

    const [form] = Form.useForm()
    const clearSearch = async () => {
        form.resetFields()
    }

    const selectSector = async (sectorName) => {
        if (!sectorName) {
            return
        }

        const res = await ipcRenderer.invoke('query', 'find-sector-stocks', {sectorName})
        setSectorStocks(res)
    }
    return (
        <div style={{height: 80, paddingTop: '20px', paddingLeft: '10px', overflow: 'hidden'}}>
            <Form form={form}>
                <Row gutter={[10, 10]}>
                    <Col span={4}>
                        <Form.Item name='sector'>
                            <Select style={{width: '100%'}} placeholder="板块" onChange={selectSector} allowClear={true}>
                                {sectorOptions}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Select style={{width: '100%'}} placeholder="股票A" onChange={setStockA}>
                            {stockOptions}
                        </Select>
                    </Col>
                    <Col span={4}>
                        <Select style={{width: '100%'}} placeholder="股票B" onChange={setStockB}>
                            {stockOptions}
                        </Select>
                    </Col>
                    <Col span={4}>
                        <Select style={{width: '100%'}} placeholder="股票C" onChange={setStockC}>
                            {stockOptions}
                        </Select>
                    </Col>
                    <Col span={2}>
                        <Select style={{width: '100%'}} placeholder="报告期" onChange={setTerm}>
                            <Select.Option value='Q1'>一季报</Select.Option>
                            <Select.Option value='Q2'>半年报</Select.Option>
                            <Select.Option value='Q3'>三季报</Select.Option>
                            <Select.Option value='Q4'>年报</Select.Option>
                        </Select>
                    </Col>
                    <Col span={4}>
                        <Button size="large" type="primary" shape="round" style={{marginRight: 10}}
                                onClick={quickSearch}>快速比较</Button>
                        <Button size="large" type="danger" shape="round" onClick={clearSearch}>清空</Button>
                    </Col>
                </Row>
            </Form>
            <Divider/>
        </div>
    );
}

export default SearchBar;
