const prompt = require('prompt-sync')();
let altura = prompt("Dime la altura de la pirámide: \n"); 
if (altura>0 ){// inicio de pirámide
        console.log(" ".repeat(altura)+" *");
    }

    for ( let i = 0; i<altura-2; i++){// vacio de pirámide
    if ( i < altura ){ 
        process.stdout.write(" ".repeat(altura-i) + "*");
        if (i>=0){
            let j = -1; 
            process.stdout.write(" ".repeat((i+i)-j) + "*"); 
        }
        console.log();
    }
}
if(altura>0){
    let k = -1;
    console.log(" " + " *".repeat(altura));
}