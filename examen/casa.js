const prompt = require('prompt-sync')();



let base = Number(prompt('Dime base: '));
let altura = Number(prompt('Dime altura: '));

console.log("----------------"); 

for (let i = 0; i<altura ; i++){

    for( let i = 0; i<altura ; i++){

    }

    if (i === 0 || i === altura -1) {
        
        console.log("*".repeat(base)); 

    }else {

        let space = " ".repeat(base-2); 
        console.log (`*${space}*`);

    }
}