const path = require('node:path');

const customPath = '/relatorios/lucas/relatorio.pdf';

console.log(path.dirname(customPath));
console.log(path.basename(customPath));
console.log(path.extname(customPath));