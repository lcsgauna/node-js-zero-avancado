const x = 10;
const y = 'Lucas';
const z = [1,2];

console.log(x,y,z);

// contagem impressões
console.count(`O valor der x é: ${x}, contagem `);
console.count(`O valor der x é: ${x}, contagem `);
console.count(`O valor der x é: ${x}, contagem `);

// variavel de string
console.log('O nome dele é %s, ele é programador', y);

// limpar console
setTimeout(() => {
    console.clear();
}, 2000);