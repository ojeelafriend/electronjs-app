const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadFile('../index.html');

  const mainMenu = Menu.buildFromTemplate(menuLayout);
  Menu.setApplicationMenu(mainMenu);
});

app.on('will-quit', () => {
  console.log('Bye bye');
});

const createNewCard = () => {
  let newCard = new BrowserWindow({ width: 400, height: 200 });
  newCard.loadFile('../newCard.html');
};

const menuLayout = [
  {
    label: 'Card',
    submenu: [
      {
        label: 'Create card',
        accelerator: 'Ctrl+N',
        click() {
          createNewCard();
        },
      },
    ],
  },
];
