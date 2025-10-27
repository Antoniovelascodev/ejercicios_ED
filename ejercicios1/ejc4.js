const prompt = require('prompt-sync')();

let a = prompt("Pon el primer número:");
let b = prompt("Escribe el segundo número:");
let c = prompt("Ingresa el tercer numero:");

a = Number(a);
b = Number(b);
c = Number(c);

if (a<0) {
 console.log ("La multiplicaión de los tres es "+(a*b*c));   
}else{
 console.log("La suma de los tres es "+(a+b+c));
}

