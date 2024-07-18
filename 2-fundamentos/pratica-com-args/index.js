const minimist = require('minimist');
const { soma } = require('./soma');
const { a, b } = minimist(process.argv.slice(2));

if(!a){ console.log('Necessario o argumento A'); return;}
if(!b){ console.log('Necessario o argumento B'); return;}
if(!parseInt(a) || !parseInt(b)){console.log('Os argumentos precisam ser inteiros'); return;}

soma(parseInt(a),parseInt(b));
