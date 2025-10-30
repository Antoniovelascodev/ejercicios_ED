//4. Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares.
//Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10.

const prompt = require('prompt-sync')();

console.log('_____________________');
n = prompt(`Dime un numero N:   `)
n = Number(n); 
console.log('_____________________');

let acumulador = 0;
let contador = 0; 
let suma = 0; 

while (contador < n ){
    
    acumulador = acumulador + 2; 
    console.log(acumulador);
    contador++; 
    suma += acumulador; 
    
}
console.log('________________________________________________');
console.log(`la suma de los ${n} primeros pares es ${suma}`); 
console.log('________________________________________________');
