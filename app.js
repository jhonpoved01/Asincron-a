//ejercicio #6 de apropiacion
import { procesoAleatorio } from "./proceso.js";

procesoAleatorio()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));