/*3. El  juego de adivinar un número. El valor a adivinar lo tendremos puesto en una variable el valor que nosotros queramos.
El número será entre 1 y 100. El programa debe dar pistas de si el número a adivinar es mayor o menor que el introducido.
Tendremos que hacer los siguientes subprocesos (funciones):
leerNumero(): Pide un numero y hasta que el usuario no escribe un valor entre 1 y 100,   vuelve a pedir el valor.
comprobarValor(numeroUsuario, numeroCorrecto): comprueba si el número es correcto; éste  devuelve un número que puede ser: 
0: los dos numeros son iguales  1: el numeroUsuario es mayor que el numeroCorrecto  -1: el numeroUsuario es menor que el numeroCorrecto. (3,3 puntos)
*/
const prompt = require('prompt-sync')();
console.log("________________"); 

console.log(`Intenta adivinar el numero que tengo apuntado del 1-100, te iré dando pistas`); 
console.log(" "); 
let num = 0; 

console.log("-------------------------"); 
num = prompt('Dime un numero: '); 
console.log("-------------------------"); 
    
while(num > 0){

    console.log(" "); 

    if(num > 43){
        console.log(`Has fallado`);
        console.log("1: El numero introducido es más grande. Inténtalo de nuevo");
        num = prompt('Dime otro numero: '); 

    }else if (num<43){
        console.log(`Has fallado`);
        console.log(`-1: El numero introducido es más pequeño, sigue intentando`);
        num = prompt('Dime otro numero: '); 

    }else if (num == 43){
        console.log(`0: Correcto el número era el 43`); 
        break; 
    }

    if (num<=0){
    console.log("Debes poner un número positivo y valido del rango 1-100");
    num = prompt('Dime otro numero: '); 
    }

}





    




