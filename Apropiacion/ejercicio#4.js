export function tomarDatos(callback) {
    setTimeout(() => callback("datos"), 1000);
}

export function procesarDatos(datos, callback) {
    setTimeout(() => callback(datos.toUpperCase()), 1000);
}

export function mostrarResultado(resultado) {
    setTimeout(() => console.log("Resultado:", resultado), 1000);
}