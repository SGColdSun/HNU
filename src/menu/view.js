'use strict';

const view = {
    label: 'View',
    submenu: [
        {
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: (item, focusedWindow) => {
                if (focusedWindow) {
                    focusedWindow.reload();
                }
            }
        },
        {
            label: 'Go back',
            accelerator: 'CmdOrCtrl+backspace',
            click: (item, focusedWindow) => {
                if (focusedWindow.webContents.canGoBack()) {
                    focusedWindow.webContents.goBack();
                }
            }
        }
    ]
};

if (process.env.NODE_ENV !== 'production') {
    view.submenu.push({
        label: 'Toggle Developer Tools',
        accelerator: (() => {
            let cmd;

            if (process.platform === 'darwin') {
                cmd = 'Alt+Command+I';
            } else {
                cmd = 'Ctrl+Shift+I';
            }

            return cmd;
        })(),
        click: (item, focusedWindow) => {
            if (focusedWindow) {
                focusedWindow.webContents.toggleDevTools();
            }
        }
    });
}

module.exports = view;