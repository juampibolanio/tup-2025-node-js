import { rl } from "./scanner.mjs";

export function sumar(cb) {
    rl.question('Ingrese el primer número: ', (num1) => {
        let numero1 = Number(num1);

        rl.question('Ingrese el segundo número: ', (num2) => {
            let numero2 = Number(num2);

            console.log(`Resultado: ${numero1 + numero2}`);
            cb(); 
        });
    });
}

export function restar(cb) {
    rl.question('Ingrese el primer número: ', (num1) => {
        let numero1 = Number(num1);

        rl.question('Ingrese el segundo número: ', (num2) => {
            let numero2 = Number(num2);

            console.log(`Resultado: ${numero1 - numero2}`);
            cb();
        });
    });
}

export function multiplicar(cb) {
    rl.question('Ingrese el primer número: ', (num1) => {
        let numero1 = Number(num1);

        rl.question('Ingrese el segundo número: ', (num2) => {
            let numero2 = Number(num2);

            console.log(`Resultado: ${numero1 * numero2}`);
            cb();
        });
    });
}

export function dividir(cb) {
    rl.question('Ingrese el dividendo: ', (dividendo) => {
        let dividendoFormat = Number(dividendo);

        rl.question('Ingrese el divisor: ', (divisor) => {
            let divisorFormat = Number(divisor);

            if (divisorFormat === 0) {
                console.log('No se puede dividir por cero.');
            } else {
                console.log(`Resultado: ${dividendoFormat / divisorFormat}`);
            }
            cb();
        });
    });
}
