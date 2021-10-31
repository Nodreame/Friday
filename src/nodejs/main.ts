const { app, BrowserWindow, ipcMain, nativeTheme, shell, dialog } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            devTools: true,
            nodeIntegration: true,
            contextIsolation: true,
        }
    })
    const isDev = process.env.NODE_ENV === 'development'
    const rendererUrl = isDev ? 'http://127.0.0.1:7001' : `files://${path.join(__dirname, '.dist/app/index.html')}`
    win.loadURL(rendererUrl)
    if (isDev) win.openDevTools();
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        console.log('activate')
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
