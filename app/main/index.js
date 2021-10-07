const {app, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const handleIPC = require('./ipc')

let win
app.on('ready', () => {
    win = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    if (isDev) {
        win.loadURL('http://localhost:3000');
    } else {
        win.loadFile(path.resolve(__dirname, '../renderer/'))
    }

    handleIPC(win)
})
