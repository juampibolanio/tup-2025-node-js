/*
    Suma de los primeros N números

    Pide al usuario un número entero positivo N.

    Calcula y muestra la suma de todos los números desde 1 hasta N.
*/

const readline = require('../utils/scanner.js');
// Aplicación

console.log('Este programa solicita un número y devuelve la suma de todos los números desde 1 hasta el número ingresado')
readline.question('Ingrese un número: ', (numero) => {
    let total = 0;

    for (let index = 0; index <= numero; index++) {

        total+=index;
    }

    console.log("La suma total es: " + total);
})