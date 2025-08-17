/*
Adivina el número

El programa genera un número aleatorio entre 1 y 10.

Pide al usuario que lo adivine.

Indica si acertó o no.
*/
import { randomInt } from 'crypto';
import { rl } from '../utils/scanner.mjs';

var numeroGenerado = randomInt(1, 11);
console.log(numeroGenerado); // para probar la condición
//a esto se le puede añadir numero de intentos.

console.log('Adivina el número entre 1 y 10: ')
rl.question('Introduzca su adivinanza: ', (numero) => {

    if (Number(numero) === numeroGenerado) {
        console.log('CORRECTO. ACERTASTE');
    }
    else {
        console.log('INCORRECTO.');
    }

    rl.close();
})
