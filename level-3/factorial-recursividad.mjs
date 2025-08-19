/*
Factorial con recursividad

Pide un número N.

Calcula el factorial de N (ejemplo: 5! = 5 × 4 × 3 × 2 × 1).

Hazlo usando una función recursiva.
*/

import { rl } from "../utils/scanner.mjs";

function calcular_factorial(numero) {

    if(numero === 0) {
        return 1;
    }
    else {
        return numero * calcular_factorial(numero - 1);
    }
}

console.log('Calcular el factorial de un número.');
rl.question('Ingrese un número: ', (numero) => {
    console.log("El factorial del número ingresado es: ", calcular_factorial(numero));
})