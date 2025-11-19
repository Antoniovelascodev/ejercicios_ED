const prompt = require('prompt-sync')();

let altura = Number (prompt('Dime la altura de la pirámide: ')); 
 
let contador = 1; 

for ( let i = 0; altura>i ; altura--){
    let base = (altura * 2 ) -1; 
    process.stdout.write('*'.repeat(base)+"\n"); 
    process.stdout.write(' '.repeat(contador)); 
    contador++; 
}
