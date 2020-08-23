const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require ('url');

const port = process.env.PORT || 8080;
//console.log(path.join(__dirname, 'preload.js'));
let mainWindow = '';
function createWindow () {
  // Create the browser window.
   mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the login.html of the app.
  //mainWindow.loadFile('login.html');

  // pathname: path.join(__dirname, './login.html'),
  console.log(__dirname, 'dirname');
  console.log(path.join(__dirname, '/../build/index.html'), "dirname");

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, 'node_electron' ,'/../build/index.html'),
    protocol: 'file:',
    slashes: true
});

  console.log(startUrl, 'startUrl');

  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
