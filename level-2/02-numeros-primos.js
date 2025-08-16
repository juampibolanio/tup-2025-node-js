/*
Números primos en un rango

Pide dos números: inicio y fin.
Los números primos son aquellos números naturales mayores que 1 que solo tienen dos divisores: 1 y el propio número

Muestra todos los números primos que estén dentro de ese rango.
*/

const readline = require('../utils/scanner');

function esPrimo(numero) {

    let divisores_encontrados = 0;

    for (let index = 2; index < numero; index++) {
        if ((numero % index) === 0) {
            divisores_encontrados++;
        }
    }

    if (divisores_encontrados > 0) {
        return false;
    }
    else {
        return true;
    }
}

var primer_numero = null;
var segundo_numero = null;
var numeros_primos = [];
console.log('Mostrar los números primos desde un rango determinado. ');
readline.question('Introduce el número de inicio: ', (numero_inicial) => {
    primer_numero = parseInt(numero_inicial);

    readline.question('Ingresa el número de fin: ', (numero_final) => {
        segundo_numero = parseInt(numero_final);

        for (let index = numero_inicial; index <= numero_final; index++) {

            if (esPrimo(index)) {
                numeros_primos.push(index);
            }
        }

        if (numeros_primos.length > 0) {
            console.log("Los números primos entre " + primer_numero + " y " + segundo_numero + " son: ");
            numeros_primos.forEach(element => {
                console.log(element);
            });
        } else {
            console.log("No hay números primos entre estos dos números.");
        }
    });
    readline.close();
});