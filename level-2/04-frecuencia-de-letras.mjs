/*

Frecuencia de letras

Pide al usuario una palabra o frase.

Muestra cuántas veces aparece cada letra.

*/

import { rl } from "../utils/scanner.mjs";

console.log('Contar cuántas veces se repite cada letra de una palabra.');
rl.question('Ingrese una palabra: ', (palabra) => {

    let cantidadPorLetra = new Map();

    for (let letra of palabra) {
        cantidadPorLetra.set(letra, (cantidadPorLetra.get(letra) || 0) + 1);
    }

    for (var [letra, repeticiones] of cantidadPorLetra){
        console.log(`Letra: ${letra}, Repeticiones: ${repeticiones}`);
    }
});