const fs = require('node:fs');

console.log('Inicio');

fs.writeFileSync('./arquivo.txt', 'oi');

console.log('fim');