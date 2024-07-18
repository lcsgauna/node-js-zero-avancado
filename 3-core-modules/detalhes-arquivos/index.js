const fs = require('node:fs');

fs.stat('novoarquivo.txt', (err,data) => {
    if(err) {console.log(err); return;}
    console.log({isFile: data.isFile(), isDirectory: data.isDirectory(), isSymbolicLink: data.isSymbolicLink(), createdTime: data.ctime, size: data.size})
});