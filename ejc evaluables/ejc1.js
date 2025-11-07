/* Desarrollar un algoritmo que permita ingresar la cantidad de hijos de N personas de una empresa, donde ninguno de ellos es pareja de otro,
validando que este valor no sea negativo. Se declararán las variables junto con su tipo y ámbito bloque.
Por tanto, se pedirá el número de personas, cada pareja sólo cuenta una, y a continuación, se solicitará el número de hijos por cada persona.
Luego mostrar un cuadro resumen con la cantidad de personas que tienen hijos y los que no. Además, mostrar el promedio de hijos por persona, 
número máximo de hijos, el número mínimo de hijos.
*/

const prompt = require('prompt-sync')();

let nummaxhijos = 0 ;  
let numminhijos ; 
let numhijos = 0 ; 
let acumulador = 1; 
let numpersonas = prompt("Ingrese la cantidad de personas en la empresa: ");
let media = 0; 

if(numpersonas<0){
    console.log('no puede ser menor de 0'); 
}

while(numpersonas>=acumulador){

    let hijos = prompt("Cuantos hijos tiene?: ")
    hijos = Number(hijos); 

    if(hijos<0){
    
        console.log('no puede ser menor de 0');
        acumulador--;  
    
    }else{

        if (acumulador === 1){

            nummaxhijos = hijos; 
            numminhijos = hijos; 

        }else{

        if (hijos>nummaxhijos) {
            nummaxhijos = hijos; 
        }
        
        if (hijos<numminhijos) {
            numminhijos = hijos; 
        }

        }

    numhijos += hijos; 
    acumulador++; 
}
}
media = numhijos/numpersonas;
console.log(" "); 
console.log(` La media de hijos por persona es de es de: ${media}, el número mínimo de hijos es de: ${numminhijos}, el numero máximo de hijos es de:  ${nummaxhijos}.`);
