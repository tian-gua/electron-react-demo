const reducer = (state, action) => {
    console.log('dispatch:', JSON.stringify(action))
    switch (action.type) {
        case 'initStocks':
            return {...state, stocks: new Set(), quickSearch: 0}
        case 'initChart':
            return {...state, chartIndex: 0, quickSearch: 0}
        case 'setStocks':
            return {...state, stocks: action.payload}
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
