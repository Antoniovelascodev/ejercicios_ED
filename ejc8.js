const prompt = require('prompt-sync')();

let numero = prompt(`Ingresa un número`);

if (numero==0) {
    console.log("El número no es par ni impar")
}

if (numero%2 == 0){ 
    console.log("El número es par")
} else {
    console.log("El número es impar")
}