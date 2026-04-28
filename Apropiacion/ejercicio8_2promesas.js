import { tiempos, log } from "./base.js";

export const verificar = (o) =>
    new Promise(r => setTimeout(() => { log(`Orden ${o.id} verificada`); r(o); }, tiempos.verificacion));

export const procesar = (o) =>
    new Promise(r => setTimeout(() => { log(`Orden ${o.id} procesada`); r(o); }, tiempos.procesamiento));

export const registrar = (o) =>
    new Promise(r => setTimeout(() => { log(`Orden ${o.id} registrada`); r(o); }, tiempos.registro));

export const notificar = (o) =>
    new Promise(r => setTimeout(() => { log(`Orden ${o.id} notificada`); r(o); }, tiempos.notificacion));