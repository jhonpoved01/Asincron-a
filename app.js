//ejercicio # 4 de apropiacion
import { tomarDatos, procesarDatos, mostrarResultado } from "./procesos.js";

tomarDatos((datos) => {
  procesarDatos(datos, (datosProcesados) => {
    mostrarResultado(datosProcesados);
  });
});

//ejercicio 5 de apropiacion
import { tomarDatos, procesarDatos, mostrarResultado } from "./procesos.js";

tomarDatos()
  .then(procesarDatos)
  .then(mostrarResultado);