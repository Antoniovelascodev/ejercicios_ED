//3. Algoritmo que nos calcule la suma de los N primeros números naturales. N se leerá por teclado.


const prompt = require('prompt-sync')();

let n = prompt ("Dame el numero de n"); // le pide el input al usuario 
n = Number(n); //define el input como numero porque de normal es string 

let contador = 1; 
let acumulador = 0; 


while (contador <= n) {  //inicio de bucle

    console.log(contador); 
    acumulador += contador ; //  
    contador++; 

}

console.log(`total = ${acumulador}`); 
