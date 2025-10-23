const prompt = require('prompt-sync')();
let dia = prompt("Dime el día: ");
let mes = prompt("Dime el mes: ");
let año = prompt("Dime el año: ");

dia = Number(dia); 
mes = Number(mes);
año = Number(año); 

let flagFecha = true;  

switch (mes) {
    case 1:
        if (dia <= 31) console.log(`${dia} de Enero de ${año}`);
        else flagFecha = false;
        break;

    case 2:
        if (dia <= 28) console.log(`${dia} de Febrero de ${año}`);
        else flagFecha = false;
        break;

    case 3:
        if (dia <= 31) console.log(`${dia} de Marzo de ${año}`);
        else flagFecha = false;
        break;

    case 4:
        if (dia <= 30) console.log(`${dia} de Abril de ${año}`);
        else flagFecha = false;
        break;

    case 5:
        if (dia <= 31) console.log(`${dia} de Mayo de ${año}`);
        else flagFecha = false;
        break;

    case 6:
        if (dia <= 30) console.log(`${dia} de Junio de ${año}`);
        else flagFecha = false;
        break;

    case 7:
        if (dia <= 31) console.log(`${dia} de Julio de ${año}`);
        else flagFecha = false;
        break;

    case 8:
        if (dia <= 31) console.log(`${dia} de Agosto de ${año}`);
        else flagFecha = false;
        break;

    case 9:
        if (dia <= 30) console.log(`${dia} de Septiembre de ${año}`);
        else flagFecha = false;
        break;

    case 10:
        if (dia <= 31) console.log(`${dia} de Octubre de ${año}`);
        else flagFecha = false;
        break;

    case 11:
        if (dia <= 30) console.log(`${dia} de Noviembre de ${año}`);
        else flagFecha = false;
        break;

    case 12:
        if (dia <= 31) console.log(`${dia} de Diciembre de ${año}`);
        else flagFecha = false;
        break;

    default:
        flagFecha = false; 
}

if (flagFecha === false) {
    console.log("ERROR: Fecha no válida");
}

if (año <= 0) {
    console.log("ERROR: Año no válido");
}