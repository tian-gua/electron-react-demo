const {ipcMain} = require('electron')
const {findAll, findAllSectors, findSectorStocks} = require('./query')

let win
module.exports = function (_win) {
    win = _win

    ipcMain.handle('query', async (e, method, paramObj) => {
        console.log(`handle channel: query[${method}] param[${JSON.stringify(paramObj)}]`)
        if ('find-all-sectors' === method) {
            return findAllSectors()
        } else if ('find-sector-stocks' === method) {
            return findSectorStocks(paramObj.sectorName)
        }
    })
}

function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}
