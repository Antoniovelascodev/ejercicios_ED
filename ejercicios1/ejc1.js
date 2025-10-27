


let prompt = require('prompt-sync')();
let a = prompt('Introduzca a: ') 
a = Number(a);
let b = prompt('Introduza b: '); 
b = Number(b); 

let c = a; 
a = b ;
b = c ; 


console.log(`El valor de a = ${a} y b = ${b}`); 
