const delay = (t, ok = true) =>
    new Promise((res, rej) =>
        setTimeout(() => ok ? res("OK") : rej("ERROR"), t)
    );

export const validarCorreo = (u) => delay(1000, Math.random() > 0.2);
export const validarDocumento = (u) => delay(1500, Math.random() > 0.2);
export const validarUsuario = (u) => delay(800, Math.random() > 0.2);