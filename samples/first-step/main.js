const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


var mainWindow = null;
var _dirname = "/Users/jasintha/repo/electorn/first-step/";

app.on('ready', () =>{
   mainWindow = new BrowserWindow ({width: 800, height: 600})
   mainWindow.loadURL('file://'+_dirname+'index.html');
})
