const http = require('node:http');
const fs = require('node:fs');
const url = require('node:url');

const PORT = 3000;

const server = http.createServer((req,res) => {
    const q = url.parse(req.url, true);
    const fileName = q.pathname.substring(1);

    if(fileName.includes('html')){
        if(fs.existsSync(fileName)){
            fs.readFile(fileName, function(err,data){
                res.writeHead(200, { 'Content-type': 'text/html'});
                res.write(data);
                res.end();
            })
            return;
        }
    };

    fs.readFile('404.html', function(err,data){
        res.writeHead(404, { 'Content-type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(PORT, function (err, data) {
    console.log('Servidor rodando na porta: ', PORT);
});