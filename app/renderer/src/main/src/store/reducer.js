const reducer = (state, action) => {
    console.log('dispatch:', JSON.stringify(action))
    switch (action.type) {
        case 'changeStockA':
            return {...state, stockA: action.payload}
        case 'changeStockB':
            return {...state, stockB: action.payload}
        case 'changeStockC':
            return {...state, stockC: action.payload}
        case 'changeStockData':
            return {...state, stockData: action.stockData}
        default:
            return state
    }
}

export default reducer
