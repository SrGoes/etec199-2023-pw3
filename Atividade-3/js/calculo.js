import Pessoa from "./Pessoas.js";
import { Pessoas } from "./Pessoas.js";

export default function calcularObjetos(Pessoas) {
for (var i = 0; i < Pessoas.length; i++) {
    var pessoa = Pessoas[i].objeto;
    pessoa.calcularIMC();
    pessoa.categorizarIMC();
}
}

export function mostrarIMC() {
    var Numero = document.getElementById("Numero").value;
    Numero--;
    var texto = "";
    if ( Numero < 0 || Numero > 19){
        texto += "Número inválido!";
        document.getElementById("resultado").innerHTML = texto;
    }else{
        var Pessoa = Pessoas[Numero].objeto;
        texto += Pessoa.nome + " - " + Pessoa.imc.toFixed(2) + " Categorizado(a): "+ Pessoa.categoriaIMC +"<br>";
        document.getElementById("resultado").innerHTML = texto;
    };
}

export function separarPorCategoria(){
    var tabela = {
        "Abaixo do peso!": 0,
        "Peso normal!": 0,
        "Sobrepeso!": 0,
        "Obesidade grau I !": 0,
        "Obesidade grau II !": 0,
        "Obesidade grau III !": 0
    };
    for (var i = 0; i < Pessoas.length; i++) {
        var pessoa = Pessoas[i].objeto;
        tabela[pessoa.categoriaIMC] += 1;
    }
    var texto = "";
    for (var categoria in tabela) {
        texto += categoria + ": " + tabela[categoria] + "<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
}

export function mostrarLista(){
    var texto = "";
    for (var i = 0; i < Pessoas.length; i++) {
        var pessoa = Pessoas[i].objeto;
        texto += pessoa.nome + " - " + pessoa.imc.toFixed(2) + " Categorizado(a): "+ pessoa.categoriaIMC +"<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
}