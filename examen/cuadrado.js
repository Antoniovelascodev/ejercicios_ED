const prompt = require('prompt-sync')();
let lado = Number(prompt('Dime el lado del cuadrado: ')); 
for (let i = 0; i<lado ; i++){process.stdout.write('* '.repeat(lado)+'\n');}