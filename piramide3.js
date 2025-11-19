const prompt = require('prompt-sync')();
let altura = prompt("Dime la altura de la pirámide: \n");

if (altura > 0) {
    console.log(" *".repeat(altura));
}

// Cuerpo hueco invertido
for (let i = altura - 2; i >= 0; i--) {
    process.stdout.write(" ".repeat(altura - i) + "*");

    if (i > 0) {
        process.stdout.write(" ".repeat(i * 2 - 1) + "*");
    }

    console.log();
}