/*
Contar vocales en una palabra

Pide al usuario una palabra o frase.

Cuenta cuántas vocales contiene (considera minúsculas, mayúsculas y vocales con tilde).
*/
import { convertirCadena } from '../utils/cadenas.mjs';
import { rl } from '../utils/scanner.mjs';

const vocales = "aeiou";

rl.question('Ingrese la palabra: ', (palabra) => {
    var palabraFormateada = convertirCadena(palabra);
    var cantidadVocales = 0;

    for (let index = 0; index < palabraFormateada.length ; index++) {
        if (vocales.includes(palabraFormateada[index])) {
            cantidadVocales++;
        } 
    }

    if (cantidadVocales === 0) {
        console.log('La palabra no contiene vocales.');
    }
    else {
        console.log('La palabra tiene ' + cantidadVocales + " vocales");
    }

    rl.close();
});


