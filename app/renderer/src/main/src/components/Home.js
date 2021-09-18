import '../global.css'
import SearchBar from "./SearchBar";
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
