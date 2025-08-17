import { rl } from "../utils/scanner.mjs";
import { sumar, restar, multiplicar, dividir } from "../utils/operaciones.mjs";

console.log("=== Calculadora de consola ===");

function mostrarMenu() {
    console.log("\n--- Menú ---");
    console.log("1 - Suma");
    console.log("2 - Resta");
    console.log("3 - Multiplicación");
    console.log("4 - División");
    console.log("5 - Salir");

    rl.question("Introduzca una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                sumar(mostrarMenu);
                break;
            case "2":
                restar(mostrarMenu);
                break;
            case "3":
                multiplicar(mostrarMenu);
                break;
            case "4":
                dividir(mostrarMenu);
                break;
            case "5":
                console.log("Has salido del programa");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();