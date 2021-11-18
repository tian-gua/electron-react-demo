const {app, dialog, BrowserWindow} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const handleIPC = require('./ipc')

let win
app.on('ready', () => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

function createWindow() {
    win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    // const url = path.resolve(__dirname, '../renderer/src/main/build/index.html')
    // win.loadFile(url).then(res => console.log(res)).catch(error => console.error(error))

    if (isDev) {
        win.loadURL('http://localhost:3000');
    } else {
        const url = "../../page/index.html"
        win.loadFile(url).then(res => console.log(res)).catch(error => console.error(error))
    }

    handleIPC(win)
}
