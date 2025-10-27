const prompt = require('prompt-sync')();

const mensajeAccesoGs = 'Puedes acceder a un Gs';

let tieneBachillerato = prompt("Tienes bachillerato? responde con s/n ").toLowerCase().trim();

if(tieneBachillerato === 's'){
    console.log(mensajeAccesoGs);
}else if(tieneBachillerato==='n'){

    let examenAcc = prompt("¿Has superado prueba de acceso? responde con s/n").toLowerCase().trim();
    if(examenAcc === 's'){
        console.log(mensajeAccesoGs);
    }else if (examenAcc === 'n'){
        console.log("No puedes cursar un grado superior");
    }else{ 
        console.log('Error de formato, pon s/n');
    }
}else{
        console.log('Error de formato, pon s/n');
}
