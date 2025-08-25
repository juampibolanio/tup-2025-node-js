// Defino el campo, dentro de éste, defino los árboles, y el tipo y cantidad de manzanas.
let campo = [
    [{ tipo: "madura", cantidad: 3 }, { tipo: "madura", cantidad: 2 }, { tipo: "inmadura", cantidad: 4 }],
    [{ tipo: "inmadura", cantidad: 2 }, { tipo: "podrida", cantidad: 1 }, { tipo: "inmadura", cantidad: 2 }],
    [{ tipo: "podrida", cantidad: 3 }, { tipo: "madura", cantidad: 5 }, { tipo: "madura", cantidad: 3 }],
    [{ tipo: "madura", cantidad: 3 }, { tipo: "madura", cantidad: 5 }, { tipo: "inmadura", cantidad: 3 }],
    [{ tipo: "podrida", cantidad: 4 }, { tipo: "inmadura", cantidad: 2 }, { tipo: "madura", cantidad: 1 }]
]

// Defino el dron cosechador
let dron = {
    energiaMax: 15,
    energiaActual: 15,
}

// Función para recargar la energía.
function recargarEnergia(tiempo) {
    return new Promise((resolve) => {
        console.log("Se agotó la energía. Volviendo a la base...");
        setTimeout(() => {
            dron.energiaActual = dron.energiaMax;
            tiempoTotal += tiempo / 1000;
            console.log("Energía recargada, continuando el recorrido...");
            resolve();
        }, tiempo);
    })
}

let tiempoTotal = 0;
let cantidadMaduras = 0;
let cantidadInmaduras = 0;
let cantidadPodridas = 0;

// Función para recorrer el campo de árboles
async function recorrerCampo() {

    for (let fila = 0; fila < campo.length; fila++) {

        for (let columna = 0; columna < campo[fila].length; columna++) {

            tiempoTotal += 1;
            dron.energiaActual -= 1;
            console.log(`Árbol actual: ${campo[fila][columna].cantidad} manzanas de tipo ${campo[fila][columna].tipo}`);

            if (campo[fila][columna].tipo === "madura") {
                cantidadMaduras += campo[fila][columna].cantidad;
                dron.energiaActual -= (campo[fila][columna].cantidad);
                tiempoTotal += (campo[fila][columna].cantidad);
            }

            if (campo[fila][columna].tipo === "inmadura") {
                cantidadInmaduras += campo[fila][columna].cantidad;
            }

            if (campo[fila][columna].tipo === "podrida") {
                cantidadPodridas += campo[fila][columna].cantidad;
            }

            if (dron.energiaActual <= 0) {
                await recargarEnergia(3000);
            }
        }

    }
}

async function iniciar() {
    await recorrerCampo();
    console.log(`Tiempo total utilizado: ${tiempoTotal} segundos.`)
    console.log(`El total de manzanas maduras recogido es de ${cantidadMaduras}`);
    console.log(`El total de manzanas inmaduras era de ${cantidadInmaduras}`);
    console.log(`El total de manzanas podridas era de ${cantidadPodridas}`);
}

iniciar();