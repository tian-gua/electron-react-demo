import '../../global.css'
import {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'

import {Button, Col, Divider, Row, Select, message, Form} from 'antd'

const {ipcRenderer} = window.require('electron')

function SearchBar() {
    console.log('渲染SearchBar')
    const [selectedSector, setSelectedSector] = useState(undefined)
    const [term, setTerm] = useState('Q4')
    const [yearRange, setYearRange] = useState('21,20,19,18,17')
    const [sectorStocks, setSectorStocks] = useState([])
    const [sectorList, setSectorList] = useState([])
    const [stockA, setStockA] = useState(undefined)
    const [stockB, setStockB] = useState(undefined)
    const [stockC, setStockC] = useState(undefined)

    const dispatch = useDispatch()

    let sectorOptions
    if (sectorList) {
        sectorOptions = sectorList.map(item => {
            return {value: item.sectorName}
        })
    }

    let stockOptions = []
    if (sectorStocks) {
        stockOptions = sectorStocks.map(item => {
            return {key: item.stockCode, label: item.stockName, value: item.stockCode}
        })
    }

    useEffect(async () => {
        console.log('查询所有板块')
        console.log('send channel: find-all-sectors')
        const res = await ipcRenderer.invoke('query', 'find-all-sectors')
        setSectorList(res)
    }, [])

    useEffect(async () => {
        console.log('选择板块: ', selectedSector)
        if (!selectedSector || selectedSector === '') {
            return
        }
        const res = await ipcRenderer.invoke('query', 'find-sector-stocks', {sector: selectedSector})
        setSectorStocks(res)
    }, [selectedSector])

    const quickSearch = async () => {
        console.log('快速查询')
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
        await dispatch({type: 'initChart'})
        await dispatch({type: 'quickSearch'})
    }

    const [form] = Form.useForm()
    const clearSearch = async () => {
        // form.resetFields()
        setSelectedSector(undefined)
        setTerm('Q4')
        setStockA(undefined)
        setStockB(undefined)
        setStockC(undefined)
        dispatch({type: 'changeChartIndex', payload: 0})
        dispatch({type: 'clearStocks'})
    }

    return (
        <div style={{height: 80, paddingTop: '20px', paddingLeft: '10px', overflow: 'hidden'}}>
            <Form form={form}>
                <Row gutter={[10, 10]}>
                    <Col span={4}>
                        <Select style={{width: '100%'}}
                                placeholder="板块"
                                value={selectedSector}
                                onSelect={item => setSelectedSector(item)}
                                options={sectorOptions}/>
                    </Col>
                    <Col span={4}>
                        <Select style={{width: '100%'}}
                                type="primary"
                                placeholder="股票A"
                                value={stockA}
                                disabled={!selectedSector}
                                onSelect={async item => {
                                    await dispatch({type: 'removeStock', payload: stockA})
                                    await dispatch({type: 'addStock', payload: item})
                                    setStockA(item)
                                }}
                                options={stockOptions}/>
                    </Col>
                    <Col span={4}>
                        <Select style={{width: '100%'}}
                                placeholder="股票B"
                                value={stockB}
                                disabled={!stockA}
                                onSelect={async item => {
                                    await dispatch({type: 'removeStock', payload: stockB})
                                    await dispatch({type: 'addStock', payload: item})
                                    setStockB(item)
                                }}
                                options={stockOptions}/>
                    </Col>
                    <Col span={4}>
                        <Select style={{width: '100%'}}
                                placeholder="股票C"
                                value={stockC}
                                disabled={!stockB}
                                onSelect={async item => {
                                    await dispatch({type: 'removeStock', payload: stockC})
                                    await dispatch({type: 'addStock', payload: item})
                                    setStockC(item)
                                }}
                                options={stockOptions}/>
                    </Col>
                    <Col span={2}>
                        <Select style={{width: '100%'}} value={term} placeholder="财报" onChange={setTerm}>
                            <Select.Option value='Q1'>一季报</Select.Option>
                            <Select.Option value='Q2'>半年报</Select.Option>
                            <Select.Option value='Q3'>三季报</Select.Option>
                            <Select.Option value='Q4'>年报</Select.Option>
                        </Select>
                    </Col>
                    <Col span={2}>
                        <Select style={{width: '100%'}} defaultValue={yearRange} placeholder="范围"
                                onChange={setYearRange}>
                            <Select.Option value='21,20,19,18,17'>近5年</Select.Option>
                            <Select.Option value='21,20,19,18,17,16,15,14,13,12'>近10年</Select.Option>
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
