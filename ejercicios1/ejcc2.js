let prompt = require('prompt-sync')();

let okNUms = true;

let a = prompt('Ingrese a: ');
//El a ahora mismo está en string por eso lo cambiamos a numero con el number 
//si a = 'asdf'  => NaN (Not a Number) 

console.log(Number(a));


if(Number.isNaN(a)){
    //declaracion de cadena con backtip ` que permiten interpolacion de variables ${a}
    console.log(`a = ${a} valor de a no es valido`);
    okNUms = false;
} else{
    a=Number(a);
}

a = Number(a); 
//Ahora a es un numero 


let b = prompt('Ingrese b : ');
//El b ahora mismo está en string por eso lo cambiamos a numero con el number 

if(Number.isNaN(b)){
    //declaracion de cadena con backtip ` que permiten interpolacion de variables ${a}
    console.log(`a = ${b} valor de b no es valido`);
    okNUms = false;
} else {
    b=Number(b);
}

b = Number(b);
//Ahora b es un numero 

if(okNUms){
    let suma = a+b; 
    let resta = a-b ;
    let prod = a*b ;

    console.log(`suma= = ${suma}, resta = ${resta}`);
} else{
    console.log('Numeros no operables');
}