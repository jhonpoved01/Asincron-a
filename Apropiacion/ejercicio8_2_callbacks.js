import { tiempos, log } from "./base.js";

export function verificar(o, cb) {
    setTimeout(() => { log(`Orden ${o.id} verificada`); cb(o); }, tiempos.verificacion);
}

export function procesar(o, cb) {
    setTimeout(() => { log(`Orden ${o.id} procesada`); cb(o); }, tiempos.procesamiento);
}

export function registrar(o, cb) {
    setTimeout(() => { log(`Orden ${o.id} registrada`); cb(o); }, tiempos.registro);
}

export function notificar(o) {
    setTimeout(() => { log(`Orden ${o.id} notificada`); }, tiempos.notificacion);
}