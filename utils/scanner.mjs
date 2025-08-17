// readline.js
import readline from "readline";

// Crear la interfaz
export const rl = readline.createInterface({
  input: process.stdin,   // Entrada estándar (teclado)
  output: process.stdout, // Salida estándar (consola)
});
