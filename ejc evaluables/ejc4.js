4.  /*Se necesita un sistema que lea los votos obtenidos por tres candidatos a alcalde en la ciudad de Mijas y calcule e imprima al ganador, 
junto con el porcentaje obtenido de votos de él y los restantes candidatos.
*/

const prompt = require('prompt-sync')();

let votos = 0; 
let candidato1=0; 
let candidato2=0; 
let candidato3=0; 
let acumulador=0; 

do {

    let pregunta = prompt('Dime tu voto: 1) Pedro 2) Rosa 3)Felipe ')
    pregunta = Number(pregunta); 

    if(pregunta===1){
        votos++;
        candidato1++;
    }

    if(pregunta===2){
        votos++;
        candidato2++;
    }

    if(pregunta===3){
        votos++;
        candidato3; 
    }

}while(votos<0){

}
