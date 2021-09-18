const {ipcMain} = require('electron')

let win
module.exports = function (_win) {
    win = _win
}

function send(channel, ...args) {
    win.webContents.send(channel, ...args)
}
