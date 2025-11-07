const prompt = require('prompt-sync')();
console.log("------------------ ");
altura = prompt("Dime la altura de la pirámide -->   "); 
console.log(" "); 
console.log(`Para una pirámide de ${altura} niveles de altura esta es la representación:  ` ); 
console.log(" ");
console.log("____________________________");
console.log(" ");

if (altura<=0) {

    console.log('Altura inválida'); 

} else { 

    for (let i = altura ; i > 0 ; i-- ) {
        let linea = ""; //Empezar con una linea vacía
    

    for (let e = 0 ; e < altura-i ; e++  ){
        linea = linea + " "; // espacios a la izq
    }

    for (let h = 0; h < 2*i -1; h++ ){
        linea = linea + "*"; // pone la pirámide
    }

    console.log(linea);
    }
    console.log(" "); 
    console.log("0 (éxito) ");   
}