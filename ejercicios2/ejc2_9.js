const prompt = require('prompt-sync')();

let n = Number(prompt('dime el lado del cuadrado')); 

//pinto la fila 

pitnloLineaCompleta(); 



for ( let i = 0; i < n-2  ; i++){
    pintaNucleo(); 
}


function pintaNucleo(){

}
process.stdout.write('\n'); 

//pinto desde la fila 2 hasta la fila n-1
 for(let i = 0; i<n-2; i++){
        pintaNucleo(); 
    }

function pintaNucleo(){
    
    //pinto 1er *
    process.stdout.write('*'); 
    //pinto2*
    for(let i = 0; i<n-2; i++){
        process.stdout.write(' '); 
    }
process.stdout.write('*'); 
process.stdout.write('\n'); 

}







