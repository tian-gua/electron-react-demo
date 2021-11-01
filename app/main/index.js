const {app, dialog, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const handleIPC = require('./ipc')

let win
app.on('ready', () => {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    // const url = path.resolve(__dirname, 'static/index.html')
    const url = "../../page/index.html"
    // dialog.showMessageBox(win, {
    //     type: 'info',
    //     title: '提示',
    //     message: url
    // })
    win.loadFile(url).then(res => console.log(res)).catch(error => console.error(error))

    // if (isDev) {
    //     win.loadURL('http://localhost:3000');
    // } else {
    //     // const url = path.resolve(__dirname, '../renderer/src/main/build/index.html')
    //     const url = path.resolve(__dirname, 'static/index.html')
    //     dialog.showMessageBox(win,{
    //         message: url,
    //         type: 'info',
    //         title: '提示'
    //     })
    //     console.log(url)
    //     win.loadFile(url).then(res => console.log(res)).catch(error => console.error(error))
    // }

    handleIPC(win)
})
