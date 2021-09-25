const {ipcMain} = require('electron')
const {findAll, findAllSectors, findSectorStocks, listStocksData} = require('./query')

let win
module.exports = function (_win) {
    win = _win

    ipcMain.handle('query', async (e, method, param) => {
        console.log(`handle channel: query[${method}] param[${JSON.stringify(param)}]`)
        if ('find-all-sectors' === method) {
            return findAllSectors()
        } else if ('find-sector-stocks' === method) {
            return findSectorStocks(param)
        } else if ('list-stocks-data' === method) {
            return listStocksData(param)
        }
    })
}

function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}
