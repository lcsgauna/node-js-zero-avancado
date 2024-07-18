const fs = require('node:fs');

console.log('Inicio');

fs.writeFile('arquivo2.txt', 'oi', function(err){
    setTimeout(function(){
        console.log('Arquivo criado');
    }, 1000)
})

console.log("Fim")