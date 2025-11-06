console.log("Dame tu edad"); 


var prompt = require('prompt-sync')(); 

//
//get input del usuario
//

{

    let edadStr= prompt('Qué edad tienes? '); 

}
edad = Number(edadStr); 

console.log(typeof edad); 

console.log("Tienes " + edad + " años."); 

edadJubilación = edad + 40; 

console.log("Te jubilas a los " + edadJubilación); 



