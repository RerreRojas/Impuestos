import { Cliente } from "./client.js";
import { Impuestos } from "./taxes.js";

let taxes1 = new Impuestos(125, 94);
let cliente1 = new Cliente("Pedrito Palotes", taxes1);
console.log(cliente1.calcularImpuesto());
