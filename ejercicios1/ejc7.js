const prompt = require('prompt-sync')();

let mes = prompt("Ingrese el mes del año (1-12):");
let importe = prompt("Ingresa el precio")

switch (mes) {

    case '1':
        console.log("El mes es Enero");  
        console.log(importe+ ` €`);
        break;

    case '2':
        console.log("El mes es Febrero");  
        console.log(importe+ ` €`);
        break;

    case '3':
        console.log("El mes es Marzo");
        console.log(importe+ ` €`) ;      
        break;

    case '4':
        console.log("El mes es Abril");
        console.log(importe+ ` €`);
        break;

    case '5':
        console.log("El mes es Mayo");
        console.log(importe+ ` €`);
        break;

    case '6':
        console.log("El mes es Junio");
        console.log(importe+ ` €`);
        break;

    case '7':
        console.log("El mes es Julio");
        console.log(importe+ ` €`);
        break;

    case '8':
        console.log("El mes es Agosto");
        console.log(importe+ ` €`);
        break;

    case '9':
        console.log("El mes es Septiembre");
        console.log(importe+ ` €`);
        break;

    case '10':
        console.log("El mes es Octubre");
        console.log(importe+ ` €`);
        let descuento = importe * 0.15;
        let precioFinal = importe - descuento;
        console.log("El precio final con descuento es: " + precioFinal + "€"); 
        break;   
    

    case '11':
        console.log("El mes es Noviembre");
        console.log(importe + ` €`);
        break;
 
    case '12':
        console.log("El mes es Diciembre");
        console.log(importe + ` €`);
        break;
 
    default: console.log("El mes no es válido");
        break;
}


