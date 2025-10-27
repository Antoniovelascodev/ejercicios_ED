const prompt = require('prompt-sync')();

let a = prompt("dime un número");

let okNUms = true;

if(a <= 0 ){
    console.log("ERROR");
} else {
    Math.pow(a, 2);
    console.log("El cuadrado de " + a + " es: " + Math.pow(a, 2));
    Math.sqrt(a);
    console.log("La raíz cuadrada de " + a + " es: " + Math.sqrt(a));
}

if(Number.isNaN(a)){
    console.log(`error de formato = ${a}``no es un numero`);
    flagFormatoOk = false;
} 

if(okNUms=false){
    console.log(`error de formato`);
}