var nodeapp = require("fh-nodeapp"); 
nodeapp.HostApp.init();
nodeapp.HostApp.serveApp(require('main.js'));
