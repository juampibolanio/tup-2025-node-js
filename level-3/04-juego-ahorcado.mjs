/*
Juego del ahorcado

Define una lista de palabras.

El programa elige una palabra aleatoria.

Muestra al usuario los guiones (_ _ _ _).

El usuario debe adivinar letra por letra hasta completar la palabra o perder tras X intentos.

*/

import { randomInt } from 'crypto';
import { rl } from '../utils/scanner.mjs';

const palabras = ["Perro", "Lobo", "Mueble", "Procesador", "Teclado", "Programar", "Payaso"];

console.log("Juego del ahorcado");

var intentos = 10;

let palabra_elegida = palabras[randomInt(palabras.length)] // selecciono una palabra aleatoria de la lista
console.log(palabra_elegida);

let palabra_guiones = [];
for (let letra of palabra_elegida) {  // por cada letra de la palabra, la reemplazo con un _
    palabra_guiones.push("_");
}

function jugarAhorcado(palabra_elegida, palabra_guiones, intentos) {
    console.log(`-> Palabra actual: ${palabra_guiones.join(" ")}`);
    console.log(`- Intentos restantes: ${intentos}`);

    rl.question(">> Ingrese una letra: ", (letra) => {
        let acierto = false;

        for (let i = 0; i < palabra_elegida.length; i++) { // si la letra ingresada es correcta, reemplazo los guiones por esa letra.
            
            if (palabra_elegida[i].toLowerCase() === letra.toLowerCase()) {
                palabra_guiones[i] = palabra_elegida[i];
                acierto = true;
            }
        }

        // si la letra es incorrecta, resto un intento.
        if (!acierto) {
            intentos--;
            console.log(`X Letra Incorrecta X | Te quedan ${intentos} intentos.`);
        }

        // si se completan todas las letras de la palabra, se da la victoria.
        if (palabra_guiones.join('').toLowerCase() === palabra_elegida.toLowerCase()) {
            console.log(`|| GANASTE || La palabra era ${palabra_elegida}`);
            rl.close();
            return;
        }

        // si se queda sin intentos, termina el juego
        if (intentos < 1) {
            console.log("X Te has quedado sin intentos X Vuelve a comenzar el juego");
            rl.close();
            return;
        }

        jugarAhorcado(palabra_elegida, palabra_guiones, intentos);
    })
}

jugarAhorcado(palabra_elegida, palabra_guiones, intentos);