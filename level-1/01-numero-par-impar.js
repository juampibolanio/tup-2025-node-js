/*
    Número par o impar

    Pide al usuario un número.

    Indica si el número es par o impar.
*/

import { readline } from "../utils/scanner";

// Aplicación

const es_par_o_impar = () => {
    
    readline.question('Ingrese un número: ', (numero) => {
        const num = numero;

        if ((num % 2) === 0) {
            return console.log('Es par');
        }
        else {
            return console.log('Es impar');
        }
    })
}

es_par_o_impar();