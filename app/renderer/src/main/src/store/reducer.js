const reducer = (state, action) => {
    console.log('dispatch:', JSON.stringify(action))
    switch (action.type) {
        case 'initStocks':
            return {...state, stocks: new Set()}
        case 'addStock':
            const stockSet = state.stocks
            stockSet.add(action.payload)
            return {...state, stocks: stockSet}
        case 'changeReportData':
            return {...state, reportData: action.reportData}
        case 'changeChartIndex':
            return {...state, chartIndex: action.payload}
        default:
            return state
    }
}

export default reducer
