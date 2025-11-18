const prompt = require('prompt-sync')();
console.log(); 
let base = Number(prompt('Dime base: '));
let altura = Number(prompt('Dime altura: '));
let niveles = Number(prompt('Dime los niveles de la escalera: '));
console.log("----------------"); 

//primer nivel 
for ( let j = 0; j<altura ; j++){ 
        process.stdout.write("\n" + "*".repeat(base));
    }
console.log(); 
//resto de niveles 
for ( let i = 1; i<niveles ; i++){

   for ( let k = 1; k<=altura ; k++){   
        
        process.stdout.write(" ".repeat((base*i)/2));
        process.stdout.write("*".repeat(base)+"\n");
    }
}