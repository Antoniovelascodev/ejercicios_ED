const prompt = require('prompt-sync')();
console.log("------------------------------------------"); 
let altura = Number(prompt('Dime la altura y te hago pirámides boca arriba y boca abajo: ')); 
console.log(""); 
console.log("Aquí boca abajo\n");

for (let i = 0; i<altura ; i++){

    if (i == 0){
        process.stdout.write("* ".repeat(altura)+"\n");
    }
    
    if ( i>0){
        process.stdout.write(" ".repeat(i));
        process.stdout.write("* ".repeat(altura-i)+"\n");
    }     
}
console.log();
console.log("Aquí boca arriba\n");
for ( let j = 1; j<=altura ; j++){

    process.stdout.write(" ".repeat(altura-j)+"* ".repeat(j)); 
    console.log(); 
}