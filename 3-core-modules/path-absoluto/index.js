const path = require('node:path');
console.log(path.resolve('teste.txt'));


//formar path
const midFolder = 'relatorios';
const fileName = 'lucas.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);
console.log(finalPath);
