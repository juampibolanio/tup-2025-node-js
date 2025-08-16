/*
1. Palíndromo

Pide al usuario una palabra o frase.

Determina si se lee igual de izquierda a derecha y de derecha a izquierda (ignora espacios, mayúsculas y tildes).
*/

const readline = require('../utils/scanner');
const convertirCadena = require('../utils/cadenas');

console.log('Determinar si una palabra es palíndromo.');
readline.question('Introduce una palabra: ', (palabra) => {
    let palabra_formateada = convertirCadena(palabra);

    let separar_cadena = palabra_formateada.split("");

    let invertir_arreglo = separar_cadena.reverse();

    let palabra_invertida = invertir_arreglo.join("");

    if (palabra_formateada === palabra_invertida) {
        console.log("La palabra " + palabra + " es un palíndromo.");
    } else {
        console.log("La palabra " +  palabra + " no es un palíndromo.")
    }
})