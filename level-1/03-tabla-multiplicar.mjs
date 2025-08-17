/*
Tabla de multiplicar

Pide al usuario un número.

Muestra la tabla de multiplicar de ese número desde 1 hasta 10.
*/

import { rl } from '../utils/scanner.mjs';

console.log('Ingrese un número para ver su tabla de multiplicar.');
rl.question('Ingrese un número: ', (numero) => {

    for (let index = 0; index < 11; index++) {
        console.log(numero + " x " + index + " = " + (numero * index) );
        
    }
    rl.close();
})