//5. Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; 
//Realizar el algoritmo que calcule la media aritmética. Suponemos que el usuario no insertará números negativos.

const prompt = require('prompt-sync')();

let contador = 0; 
let input1;
let acumulador=0;

do{

    input1 = prompt (`Dime un numero`);
    input1 = Number(input1); 
    if(input1>-1){
    contador++;
    acumulador = acumulador + input1; 
    }else if(input1==-1) {
        console.log(`Se introduce valor de final`)
    }else{
        console.log('Valor incorrecto'); 
    }

} while (input1 != -1);
console.log('_____________________');
console.log(`la media de los numero es = ${acumulador/contador}`); 

