const reducer = (state, action) => {
    console.log('dispatch:', JSON.stringify(action))
    switch (action.type) {
        case 'clearStocks':
            return {...state, stocks: new Set(), quickSearch: 0}
        case 'initChart':
            return {...state, chartIndex: 0, quickSearch: 0}
        case 'addStock':
            state.stocks.add(action.payload)
            return {...state, stocks: state.stocks}
        case 'removeStock':
            state.stocks.delete(action.payload)
            return {...state, stocks: state.stocks}
        case 'changeReportData':
            return {...state, reportData: action.reportData}
        case 'changeChartIndex':
            return {...state, chartIndex: action.payload}
        case 'quickSearch':
            return {...state, quickSearch: 50}
        default:
            return state
    }
}

export default reducer
