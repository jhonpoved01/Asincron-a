export function tomarDatos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("datos"), 1000);
    });
}

export function procesarDatos(datos) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(datos.toUpperCase()), 1000);
    });
}

export function mostrarResultado(resultado) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Resultado:", resultado);
            resolve();
        }, 1000);
    });
}