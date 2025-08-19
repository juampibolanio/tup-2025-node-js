/*
Fibonacci

Pide un número N.

Muestra los primeros N números de la secuencia de Fibonacci.

Bonus: implementa una versión recursiva y otra con bucle para comparar.
*/

import { rl } from '../utils/scanner.mjs';

function calcular_fibonacci(numero) {

    const fibonacci_lista = [0, 1];

    for (let i = 2; i < numero; i++) {
        fibonacci_lista[i] = fibonacci_lista[i - 1] + fibonacci_lista[i - 2];
    }
    return fibonacci_lista;
}

rl.question('Ingrese un número para calcular la secuencia de Fibonacci: ', (numero) =>{ 
    let resultado = (calcular_fibonacci(parseInt(numero)));

    resultado.forEach(valor => {
        console.log(valor);
    });
})