import '../../global.css'
import {useState} from "react";
import {Button, Col, Divider, Input, Row, Select} from 'antd'

const {Option} = Select

const {ipcRenderer} = window.require('electron')

function SearchBar(props) {
    let sectorList = props.sectorList;
    let {sectorStocks, setSectorStocks, setStockData} = props
    let [stockA, setStockA] = useState('')
    let [stockB, setStockB] = useState('')
    let [stockC, setStockC] = useState('')

    const selectSector = async (sectorName) => {
        const res = await ipcRenderer.invoke('query', 'find-sector-stocks', {sectorName})
        setSectorStocks(res)
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
        const res = await ipcRenderer.invoke('query', 'list-stocks-data', {stocks})
        setStockData(res)
    }

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

    return (
        <div style={{height: 80, paddingTop: '20px', paddingLeft: '10px', overflow: 'hidden'}}>
            <Row gutter={[10, 10]}>
                <Col span={4}>
                    <Select style={{width: '100%'}} placeholder="板块" onChange={(v) => selectSector(v)}>
                        {sectorOptions}
                    </Select>
                </Col>
                <Col span={4}>
                    <Select style={{width: '100%'}} placeholder="股票A" onChange={(v) => setStockA(v)}>
                        {stockOptions}
                    </Select>
                </Col>
                <Col span={4}>
                    <Select style={{width: '100%'}} placeholder="股票B" onChange={(v) => setStockB(v)}>
                        {stockOptions}
                    </Select>
                </Col>
                <Col span={4}>
                    <Select style={{width: '100%'}} placeholder="股票C" onChange={(v) => setStockC(v)}>
                        {stockOptions}
                    </Select>
                </Col>
                <Col span={8}>
                    <Button size="large" type="primary" shape="round" style={{marginRight: 10}} onClick={() => quickSearch()}>快速比较</Button>
                    <Button size="large" type="danger" shape="round" onClick={() => console.log('')}>清空</Button>
                </Col>
            </Row>
            <Divider/>
        </div>
    );
}

export default SearchBar;
