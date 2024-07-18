const http = require('node:http');
const fs = require('node:fs');

const PORT = 3000;

const server = http.createServer((req,res) => {
    const url = require('node:url').parse(req.url,true);
    const name = url.query.name;

    if(!name){
        fs.readFile('index.html', function(err,data){
            res.writeHead(200,{'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });
        return;
    }

    fs.writeFile('arquivo.txt', name, function(err,data){
        res.writeHead(302,{
            location: '/'
        })
        res.end();
    })
});

server.listen(PORT, () => {
    console.log('Servidor rodando na porta: ', PORT);
});