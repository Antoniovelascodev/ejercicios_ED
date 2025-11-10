const prompt = require('prompt-sync')();

let altura = prompt("Dime la altura de la pirámide: "); 
let contador = 0; 

while ( contador < altura ){
    
    process.stdout.write ( '-' .repeat (altura-1-contador)); //Escribir sin salto de linea  
    process.stdout.write ( '*' .repeat (2*contador+1)); //Escribir sin salto de linea  
    process.stdout.write ('\n'); //saltos de linea
    contador++; 

}
