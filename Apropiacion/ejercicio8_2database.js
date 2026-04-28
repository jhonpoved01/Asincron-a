export const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

export const tiempos = {
    verificacion: 1500,
    procesamiento: 2000,
    registro: 1000,
    notificacion: 500
};

export function log(mensaje) {
    console.log(`${new Date().toLocaleTimeString()} - ${mensaje}`);
}