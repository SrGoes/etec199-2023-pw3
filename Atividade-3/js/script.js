import calcularObjetos from "./calculo.js";
import { mostrarIMC } from "./calculo.js";
import { separarPorCategoria } from "./calculo.js";
import { mostrarLista } from "./calculo.js";
import Pessoa from "./Pessoas.js";
import { Pessoas } from "./Pessoas.js";

console.log(Pessoas);
calcularObjetos(Pessoas);

document.getElementById("mostrarIMC").addEventListener("click", mostrarIMC);
document.getElementById("separarPorCategoria").addEventListener("click", separarPorCategoria);
document.getElementById("mostrarLista").addEventListener("click", mostrarLista);