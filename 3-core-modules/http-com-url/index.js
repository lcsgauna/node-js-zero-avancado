const http = require('node:http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const urlInfo = require('node:url').parse(req.url,true);
    const name = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    if(!name){
        res.end(`<h1>Preencha o seu nome:</h1>
                <form method="GET">
                    <input type="text" name="name"/>
                    <button type="submit">Enviar</button>
                </form>`
            );
            return;
    }

    res.end(`<h1 style="text-transform:capitalize">Seja bem-vindo ${name}</h1>`);
});

server.listen(PORT, () => {
    console.log('Servidor rodando na porta: ', PORT);
});