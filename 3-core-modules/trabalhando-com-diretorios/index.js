const fs = require('node:fs');

if(!fs.existsSync('./minhapasta')){
    console.log('Não existe este diretorio!');
    fs.mkdirSync('minhapasta');
    return;
}


if(fs.existsSync('./minhapasta')){
    console.log('Diretorio existe');
}