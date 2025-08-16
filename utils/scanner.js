// Readline para solicitar datos por teclado.
const readline = require('readline').createInterface({ // Se importa el módulo readline para acceder a sus funcionalidades. 
    input: process.stdin, // Especifica la entrada estándar (teclado) usando process.stdin.
    output: process.stdout, // Especifica la salida estándar (consola) usando process.stdout.
});

module.exports = readline; // exporto el modulo 