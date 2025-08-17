/*
    Número par o impar

    Pide al usuario un número.

    Indica si el número es par o impar.
*/

import { rl } from "../utils/scanner.mjs";

const es_par_o_impar = () => {
    
    rl.question('Ingrese un número: ', (numero) => {
        const num = Number(numero);

        if ((num % 2) === 0) {
            return console.log('Es par');
        }
        else {
            return console.log('Es impar');
        }
        
        rl.close();
    })
}

es_par_o_impar();