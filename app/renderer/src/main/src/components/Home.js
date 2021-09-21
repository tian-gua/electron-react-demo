import '../global.css'
import SearchBar from "./search-bar/SearchBar";
import {Divider} from "antd";


function render() {
    return (
        <div className="home">
            <SearchBar/>
            <Divider/>
        </div>
    );
}

export default render;
