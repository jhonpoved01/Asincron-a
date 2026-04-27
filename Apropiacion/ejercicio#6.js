export function procesoAleatorio() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5
                ? resolve("✅ Éxito")
                : reject("❌ Error");
        }, 1000);
    });
}