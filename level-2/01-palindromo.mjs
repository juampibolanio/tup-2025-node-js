/*
1. Palíndromo

Pide al usuario una palabra o frase.

Determina si se lee igual de izquierda a derecha y de derecha a izquierda (ignora espacios, mayúsculas y tildes).
*/

import { rl } from '../utils/scanner.mjs';
import convertirCadena from '../utils/cadenas.mjs';

console.log('Determinar si una palabra es palíndromo.');
rl.question('Introduce una palabra: ', (palabra) => {
    let palabra_formateada = convertirCadena(palabra);

    let separar_cadena = palabra_formateada.split("");

    let invertir_arreglo = separar_cadena.reverse();

    let palabra_invertida = invertir_arreglo.join("");

    if (palabra_formateada === palabra_invertida) {
        console.log("La palabra " + palabra + " es un palíndromo.");
    } else {
        console.log("La palabra " +  palabra + " no es un palíndromo.")
    }
    rl.close();
})