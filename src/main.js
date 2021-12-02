const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

app.on('ready', () => {
  Menu.setApplicationMenu(null);

  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('./views/index.html');

  mainWindow.on('closed', () => {
    app.quit();
  });
});

app.on('will-quit', () => {
  console.log('Bye bye');
});
