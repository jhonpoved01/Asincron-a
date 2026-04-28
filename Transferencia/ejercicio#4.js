const delay = (t, ok = true, msg = "") =>
    new Promise((res, rej) =>
        setTimeout(() => ok ? res(msg) : rej(msg), t)
    );

export const validarStock = (id) => delay(1000, Math.random() > 0.2, `Stock OK ${id}`);
export const calcularCostos = (id) => delay(1200, true, `Costos OK ${id}`);
export const recomendaciones = (id) => delay(800, true, `Recomendaciones ${id}`);
export const generarFactura = (id) => delay(700, true, `Factura generada ${id}`);