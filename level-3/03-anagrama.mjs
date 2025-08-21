/*
Anagramas

Pide dos palabras al usuario.

Indica si una es un anagrama de la otra (tienen las mismas letras en distinto orden).

*/

import { rl } from '../utils/scanner.mjs'

/*

Pedir las dos palabras

recorrer la primera palabra y guardar sus letras en una lista

recorrer la 2da palabra y verificar si contiene las letras de la lista donde se guardó las letras de la 1er palabra

*/

console.log("===== Verificar si dos palabras son anagramas =====");

function esAnagrama() {
    rl.question('-> Ingrese la primera palabra: ', (primer_palabra) => {


        rl.question('-> Ingrese la segunda palabra: ', (segunda_palabra) => {

            let letras_primer_palabra = primer_palabra.toLowerCase().split('');
            let letras_segunda_palabra = segunda_palabra.toLowerCase().split('');

            if (primer_palabra.length !== segunda_palabra.length) {
                console.log("No es anagrama.");
                rl.close();
                return
            }
            if (letras_primer_palabra.sort().join('') === letras_segunda_palabra.sort().join('')) {
                console.log("Es anagrama");
                rl.close();
                return;
            }

            console.log("No es anagrama.")
            return;
        })
    })
}

esAnagrama();