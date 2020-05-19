var path = require('path')
             // gmail function
            function gmalFunc() {
                const remote = require('electron').remote;
            const BrowserWindow = remote.BrowserWindow;

            var win = new BrowserWindow({ width: 1200, height: 700,
                icon: path.join(__dirname, '../assets/icons/icon.ico') });
            win.loadURL('https://mail.google.com') 
            win.webContents.on('did-finish-load',() => {   
                win.show()
                
            })
              }
             /* // fb function
             function fbFunc() {
                const remote = require('electron').remote;
            const BrowserWindow = remote.BrowserWindow;

            var win2 = new BrowserWindow({ width: 1200, height: 700 });
            win2.loadURL('https://www.facebook.com') 
            win2.webContents.on('did-finish-load',() => {
                win2.show()
                
            })
              } */
              
             //youtube function
              function youtubeFunc() {
                const remote = require('electron').remote;
            const BrowserWindow = remote.BrowserWindow;

            var win3 = new BrowserWindow({ width: 1200, height: 700,
                icon: path.join(__dirname, '../assets/icons/icon.ico') });
            win3.loadURL('https://www.youtube.com') 
            win3.webContents.on('did-finish-load',() => {  
                win3.show()
                
            })
              }

              //drive function
              function driveFunc() {
                const remote = require('electron').remote;
            const BrowserWindow = remote.BrowserWindow;

            var win3 = new BrowserWindow({ width: 1200, height: 700,
                icon: path.join(__dirname, '../assets/icons/icon.ico') });
            win3.loadURL('https://drive.google.com') 
            win3.webContents.on('did-finish-load',() => {  
                win3.show()
                
            })
              }

         