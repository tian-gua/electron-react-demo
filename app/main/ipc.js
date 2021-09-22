const {ipcMain} = require('electron')
const {findAll, findAllSectors} = require('./query')

let win
module.exports = function (_win) {
    win = _win

    ipcMain.handle('find-all-sectors', async () => {
        console.log('handle channel: find-all-sectors')
        return findAllSectors()
    })
}

function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}
