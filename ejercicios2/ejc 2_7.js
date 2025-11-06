//7. Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos.

const prompt = require('prompt-sync')();

let n ; //Declara n antes de usarla porque sino no puede, pero está declarada con undefined (no se sabe si es numero/letra...) 
let max, min, acumulador=0, contador=0;   

do {

    n= Number(prompt('Intro.num'));  

    if(n>0){

        if(max === undefined || n > max){
            max = n;  
        }

        if ( min === undefined || n > max){
            min = n; 
        }
    }

    contador++; 
    acumulador+=n; 

} while ( n !== 0 );

console.log(`El máximo es ${max}, la media es ${acumulador/contador}`); 

