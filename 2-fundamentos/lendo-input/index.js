const {stdin:input,stdout:output} = require('node:process');
const readline = require('readline').createInterface({
    input,
    output
});

readline.question("Qual a sua linguagem preferida? ", (language) => {
    console.log("A minha linguagem preferida ẽ: ", language);
    readline.close();
})