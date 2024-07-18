const http = require('node:http');
const fs = require('node:fs');
const PORT = 3000;

const server = http.createServer((req,res) => {
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

server.listen(PORT,() => {
    console.log('Servidor rodando na porta: ', PORT);
});