import '../global.css'
import SearchBar from "./search-bar/SearchBar";

import {useState, useEffect} from "react";
import StockChart from "./chart-ground/StockChart";
import {Divider} from "antd";

const {ipcRenderer} = window.require('electron')

function Home() {
    let [sector, setSector] = useState()
    let [sectorStocks, setSectorStocks] = useState()
    let [sectorList, setSectorList] = useState([])
    let [stockA, setStockA] = useState('')
    let [stockB, setStockB] = useState('')
    let [stockC, setStockC] = useState('')

    const findAllSectors = async () => {
        const res = await ipcRenderer.invoke('query', 'find-all-sectors')
        setSectorList(res)
    }

    useEffect(() => {
        findAllSectors()
        console.log('send channel: find-all-sectors')
    }, [sectorList.length])

    return (
        <div className="home">
            <div style={{height: 80}}>
                <div style={{position: 'fixed', width: '100%', zIndex: 100, backgroundColor: "white"}}>
                    <SearchBar
                        setStockA={setStockA}
                        setStockB={setStockB}
                        setStockC={setStockC}
                        sectorList={sectorList}
                        sector={sector}
                        setSector={setSector}
                        sectorStocks={sectorStocks}
                        setSectorStocks={setSectorStocks}/>
                </div>
            </div>
            <StockChart/>
            <div style={{height: '40px'}}/>
        </div>
    );
}

export default Home;
