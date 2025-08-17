/*
Ordenar lista de números

Pide al usuario que ingrese varios números separados por coma.

Convierte esos números en un array.

Ordena el array de menor a mayor y muéstralo.
*/

import { rl } from '../utils/scanner.mjs';

rl.question('Introduce varios números separados por coma: ', (numeros) => {
    var numeros_array = numeros.split(',');
    var numeros_formateados = [];

    for (let i = 0; i < numeros_array.length; i++) {
        numeros_formateados.push(parseInt(numeros_array[i]));
    }

    numeros_formateados.sort(function(a, b) {
        return a - b;
    });

    console.log(numeros_formateados);
    rl.close();
});