//ejercicio #8_2 apropiacion 
//callbacks
import { verificar, procesar, registrar, notificar } from "./procesosCallbacks.js";

const orden = { id: 1, cliente: "Ana", monto: 120000 };

verificar(orden, (o1) => {
    procesar(o1, (o2) => {
        registrar(o2, (o3) => {
            notificar(o3);
        });
    });
});
//promesas
import { verificar, procesar, registrar, notificar } from "./procesosPromesas.js";

const orden = { id: 1, cliente: "Ana", monto: 120000 };

verificar(orden)
    .then(procesar)
    .then(registrar)
    .then(notificar);
//asint await
import { ordenes, log } from "./base.js";
import { verificar, procesar, registrar, notificar } from "./procesosPromesas.js";

// 🔹 Procesar UNA orden
async function procesarOrden(o) {
    const inicio = Date.now();

    await verificar(o);
    await procesar(o);
    await registrar(o);
    await notificar(o);

    const fin = Date.now();
    log(`Orden ${o.id} completada en ${(fin - inicio)/1000}s`);
}

// 🔸 EN SERIE (una por una)
export async function enSerie() {
    const inicio = Date.now();

    for (let o of ordenes) {
        await procesarOrden(o);
    }

    log(`TOTAL SERIE: ${(Date.now() - inicio)/1000}s`);
}

// 🔸 EN PARALELO (todas a la vez)
export async function enParalelo() {
    const inicio = Date.now();

    await Promise.all(ordenes.map(procesarOrden));

    log(`TOTAL PARALELO: ${(Date.now() - inicio)/1000}s`);
}

