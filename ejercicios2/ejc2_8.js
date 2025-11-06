/*8. Algoritmo que lea un número entero (lado) y a partir de él 
cree un cuadrado de asteriscos con ese tamaño.
*/

const prompt = require('prompt-sync')();

let entrada = Number(prompt('Dime el lado del cuadrado')); 
let fila = '*'.repeat(entrada); 

for ( let i = 0; i < entrada  ; i++){
    
    for(let j = 0; j < entrada ; j++){

        process.stdout.write('*'); 
    }
    
    console.log(fila)
}

