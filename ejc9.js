const prompt = require('prompt-sync')();
let bachillerato = prompt("Tienes bachillerato? responde con s/n ");

if(bachillerato=='s'){
    console.log("Puedes cursar un grado superior");
}else{
    let examenAcc = prompt("Has superado prueba de acceso? responde con s/n");
    if(examenAcc == 's'){
        console.log("Puedes cursar un grado superior");
    }else{
        console.log("No puedes cursar un grado superior");
    }
}
