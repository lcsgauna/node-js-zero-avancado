const chalk = require('chalk');
const nota = 4;

if(nota<7){
    console.log(chalk.black.bgRed("Você precisa fazer a prova de recuperação!"));
    return;
}

console.log(chalk.green("Parabẽns! Você está aprovado!"));