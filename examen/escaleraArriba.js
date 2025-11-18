const prompt = require('prompt-sync')();
let niveles = Number(prompt('Dime los niveles de la escalera: ')); 
for ( let j = niveles; j>0 ; j--){ 
    process.stdout.write("  ".repeat((niveles*j)/2));
    for(let i = 0; i < niveles ; i++){process.stdout.write('* ');}
    console.log(''); 
}