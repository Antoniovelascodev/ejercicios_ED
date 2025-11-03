const prompt = require('prompt-sync')();
let contador = 0; 
let clave; 

do {
    clave = prompt('Introduzca la clave: ').toLowerCase(); 
    contador++; 
    if (clave != 'eureka'){
    console.log("Error de clave"); 
}
} while ( clave != 'eureka' && contador < 3 );
    


if(clave === 'eureka'){
    console.log('Clave correcta');
} else {
    console.log('Has agotado los 3 intentos'); 
}

