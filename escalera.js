const prompt = require('prompt-sync')();

let base = Number(prompt('Dime base: '));
let altura = Number(prompt('Dime altura: '));
let niveles = Number(prompt('Dime los niveles de la escalera: '));
console.log("----------------"); 


for (let i = 0; i<niveles ; i++){

    for (let i = 0; i<altura ; i++){
        console.log("*".repeat(base));
    }

    for(let i = 0; i<altura ; i++){
        console.log("-".repeat(altura/2))
    }

}

