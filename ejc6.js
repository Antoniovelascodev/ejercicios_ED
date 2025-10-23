const prompt = require('prompt-sync')();

let niños = prompt("Ingrese el número de niños:");
let niñas = prompt("Ingrese el número de niñas:");

suma= Number(niños) + Number(niñas);

niñosporcent=(niños/suma)*100; 
niñasporcent = (niñas/suma)*100; 
console.log("El porcentaje de niños es: " + niñosporcent + "%");
console.log("El porcentaje de niñas es: " + niñasporcent + "%");
