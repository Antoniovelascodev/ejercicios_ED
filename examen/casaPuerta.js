const prompt = require('prompt-sync')();
let altura = Number(prompt('Dime la altura de la casa (SOLO MÚLTIPLOS DE 12 XD):  ')); 
console.log(); 
altura = altura/2; 
for(let i = 1; i<=altura ;i++){process.stdout.write(' '.repeat(altura-i)+"* ".repeat(i)+'\n');}//techo de la casa 
for(let i = 1; i<=altura; i++){
    if(i<altura){
        if(i-1== altura/2 && i<altura){//parte de arriba de la puerta
            process.stdout.write('*' + ' '.repeat((altura/2)-2) + '*' + '*'.repeat(altura-1) + '*'+ ' '.repeat((altura/2)-2) + '*\n' );
        } 
        if(i>altura/2 && i<altura){//puerta con separación por los laos y partes de la casa 
            process.stdout.write('*' + ' '.repeat((altura/2)-2) + '*' + ' '.repeat(altura-1) + '*'+ ' '.repeat((altura/2)-2) + '*\n' );
        }else{//resto de la casa de laterales
            process.stdout.write('* ' + '  '.repeat(altura-2)+'*\n');
        }
    }else{//parte del suelo de la casa 
        process.stdout.write('* '.repeat(altura));
    }
}

console.log(); 
console.log(); 