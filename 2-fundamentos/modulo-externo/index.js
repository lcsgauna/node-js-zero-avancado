const minimist = require('minimist');

const { nome } = minimist(process.argv.slice(2));
console.log(nome);

// console.log(args)
// const nome = args['nome'];
// console.log(nome);