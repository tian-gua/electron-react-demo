import '../global.css'
import SearchBar from "./search-bar/SearchBar";
import {Divider} from "antd";

import {useState, useEffect} from "react";
import StockChart from "./chart-ground/StockChart";

const {ipcRenderer} = window.require('electron')

function Home() {
    let [sector, setSector] = useState()
    let [sectorList, setSectorList] = useState([])
    let [stockA, setStockA] = useState('')
    let [stockB, setStockB] = useState('')
    let [stockC, setStockC] = useState('')

    const findAllSectors = async () => {
        const res = await ipcRenderer.invoke('find-all-sectors')
        setSectorList(res)
    }

    useEffect(() => {
        findAllSectors()
        console.log('send channel: find-all-sectors')
    }, [sectorList.length])

    return (
        <div className="home">
            <SearchBar stockA={stockA} setStockA={setStockA} stockB={stockB} setStockB={setStockB} stockC={stockC}
                       setStockC={setStockC} sectorList={sectorList} sector={sector} setSector={setSector}/>
            <Divider/>
            <StockChart />
        </div>
    );
}

export default Home;
