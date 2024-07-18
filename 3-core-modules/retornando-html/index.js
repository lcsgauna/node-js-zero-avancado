const http = require('node:http');
const PORT = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Ola, este e o meu primeiro server com HTML</h1>');
});

server.listen(PORT,() => {
    console.log("Servidor rodando na porta:",PORT);
});

