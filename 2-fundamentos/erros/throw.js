const x = '10';

//checar se x é um número

if(!Number.isInteger(x)){
    throw new Error("O valor de x não é um nũmero inteiro!")
}

console.log("O valor de x é um número")

