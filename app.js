// ejercicio # 5 de apropiacion
import { tomarDatos, procesarDatos, mostrarResultado } from "./procesos.js";

tomarDatos()
    .then(procesarDatos)
    .then(mostrarResultado);