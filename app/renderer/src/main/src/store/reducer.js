const reducer = (state, action) => {
    console.log('dispatch:', JSON.stringify(action))
    switch (action.type) {
        case 'initChart':
            return {...state, chartIndex: 0, quickSearch: 0}
        case 'setStocks':
            state.stocks[action.payload.index] = action.payload.stock
            return {...state, stocks: state.stocks}
        case 'clearStocks':
            return {...state, stocks: {a: undefined, b: undefined, c: undefined}, quickSearch: 0}
        case 'changeReportData':
            return {...state, reportData: action.reportData}
        case 'changeChartIndex':
            return {...state, chartIndex: action.payload}
        case 'quickSearch':
            return {...state, quickSearch: 50}
        case 'setYearRange':
            return {...state, yearRange: action.payload}
        case 'setTerm':
            return {...state, term: action.payload}
        default:
            return state
    }
}

export default reducer
