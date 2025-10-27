let prompt = require('prompt-sync')();  

let a = prompt('Ingrese a: ');

let flagFormatoOk = true;

a = Number(a);

if(Number.isNaN(a)){
    console.log(`error de formato = ${a}``no es un numero`);
    flagFormatoOk = false;
} 

let b = prompt('Ingrese b : ');

b = Number(b);

if(Number.isNaN(b)){
    console.log(`error de formato = ${b} no es un numero`); 
    flagFormatoOk = false;
} 

if(flagFormatoOk){ 

    if(a>b){
        console.log(`a = ${a} es mayor que b = ${b}`);
    }else if(a<b){
        console.log(`a = ${a} es menor que b = ${b}`);
    }else{
        console.log(`a = ${a} es igual que b = ${b}`);
    }

}else{
    console.log(`Formato incorrecto`);
} 