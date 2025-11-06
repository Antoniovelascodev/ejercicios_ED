const prompt = require('prompt-sync')();
altura = prompt("Dime la altura de la pirámide"); 




funcion 


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
    console.log("0 (éxito) ");   

}