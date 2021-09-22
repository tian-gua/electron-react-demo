import '../global.css'
import SearchBar from "./search-bar/SearchBar";
import {Divider} from "antd";

import {useState, useEffect} from "react";

const {ipcRenderer} = window.require('electron')

function Home() {
    let [sector, setSector] = useState()
    let [sectorList, setSectorList] = useState([])
    let [stockA, setStockA] = useState('a')
    let [stockB, setStockB] = useState('b')
    let [stockC, setStockC] = useState('c')

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
            <SearchBar stockA={stockA} stockB={stockB} stockC={stockC} sectorList={sectorList} sector={sector}/>
            <Divider/>
        </div>
    );
}

export default Home;
