const { app, BrowserWindow, Menu, BrowserWindowProxy } = require('electron');
const url = require('url');
const path = require('path');
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
})

let mainWindow
let nuevoCliente

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }));

    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);
});

function crearCliente() {
    nuevoCliente = new BrowserWindow({
        width: 400,
        height: 300,
        title: 'Nuevo Cliente'
    });
    nuevoCliente.setMenu(null);
    nuevoCliente.loadURL(url.format({
        pathname: path.join(__dirname, 'views/cliente.html'),
        protocol: 'file',
        slashes: true
    }));
}
function nuevoProducto() {
    nuevoProducto = new BrowserWindow({
        width: 1000,
        height: 500,
        title: 'Registrar nuevo producto'
    });
    nuevoProducto.setMenu(null);
    nuevoProducto.loadURL(url.format({
        pathname: path.join(__dirname, 'views/nuevoProducto.html'),
        protocol: 'file',
        slashes: true
    }));
}

const menu = [
    {
        label: 'Archivo',
        submenu: [
            {
                label: 'Nuevo Cliente',
                accelerator: 'Ctrl+N',
                click() {
                    crearCliente();
                }
            },
            {
                label: 'Registrar Producto',
                accelerator: 'Crlt+P',
                click() {
                    nuevoProducto();
                }
            }
        ]
    }
]