import '../global.css'
import SearchBar from "./search-bar/SearchBar";
import StockChart from "./chart-ground/StockChart";

function Home() {
    return (
        <div className="home">
            <div style={{height: 80}}>
                <div style={{position: 'fixed', width: '100%', zIndex: 100, backgroundColor: "white"}}>
                    <SearchBar/>
                </div>
            </div>
            <StockChart/>
            <div style={{height: '40px'}}/>
        </div>
    );
}

export default Home;
