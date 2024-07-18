const prompt = require('inquirer').createPromptModule();

function validateAnswers(answers){
    if(Object.keys(answers).length < 0){console.log('É necessário pelo menos uma nota'); return false;}
    if((isNaN(Number(answers.p1)) || isNaN(Number(answers.p2)))){console.log('Os valores devem ser numéricos'); return false;}
    if(answers.p1 < 0 || answers.p2 < 0){console.log('Os valores devem ser positivos'); return false;}
    return answers;
}

prompt(
    [
        {
            name:'p1',
            message:'Qual a primeira nota? '
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota? '
        }
    ]
).then((answers) => {
    if(!validateAnswers(answers))return;
    const media = (parseFloat(answers.p1)+parseFloat(answers.p2))/Object.keys(answers).length;
    console.log("A media é: ", media);
})
 .catch((error)  => {console.log(error)});
