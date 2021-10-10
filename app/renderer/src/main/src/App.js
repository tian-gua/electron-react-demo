import './App.css';
import './global.css'
import Home from './components/Home'

import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducer from './store/reducer'

let store = createStore(reducer, {
    stockA: '',
    stockB: '',
    stockC: '',
    stockData: {}
})

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home/>
            </div>
        </Provider>
    );
}

export default App;
