const prompt = require('prompt-sync')();

let altura = Number(prompt('Dime la altura: ')); 

process.stdout.write(" ".repeat(altura)); 
process.stdout.write('*'); 

for ( let i  = 0; i<altura ; i++ ){

    process.stdout.write(" ".repeat(i)); 
    console.log('*'); 
}


