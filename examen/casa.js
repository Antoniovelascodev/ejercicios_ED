const prompt = require('prompt-sync')();


console.log(); 
let base = Number(prompt('Dime base: '));
let altura = Number(prompt('Dime altura: '));

console.log("----------------"); 

for ( let j = 1; j<=altura+1 ; j++){

    process.stdout.write(" ".repeat(base-j)+"* ".repeat((j*j)-1)); 
    console.log(); 
}

for (let i = 0; i<altura ; i++){
    //principio y fin 
    if (i === 0 || i === altura-1) {
        
        process.stdout.write("\n"+"* ".repeat(base)); 

    }else {
        //aqui hacemos el centro que siempre es -2 da igual q sea porque arriba y abajo está hecho antes y a la izquierda tb  
        process.stdout.write("\n" + "* ");
        process.stdout.write("  ".repeat(base-2)+"*");

    }
    
}
console.log("\n"); 