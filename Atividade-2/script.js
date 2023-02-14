var Pessoas = [{
    "Nome": "Isis",
    "Idade": 17,
    "Altura": 1.71,
    "Peso": 66,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Alessandra",
    "Idade": 17,
    "Altura": 1.62,
    "Peso": 68,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Magno",
    "Idade": 80,
    "Altura": 1.83,
    "Peso": 63,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Lorena",
    "Idade": 17,
    "Altura": 1.63,
    "Peso": 58,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Gabriel",
    "Idade": 18,
    "Altura": 1.74,
    "Peso": 65,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Amanda",
    "Idade": 17,
    "Altura": 1.71,
    "Peso": 66,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Aline",
    "Idade": 17,
    "Altura": 1.62,
    "Peso": 68,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "João",
    "Idade": 80,
    "Altura": 1.83,
    "Peso": 63,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Maria",
    "Idade": 17,
    "Altura": 1.63,
    "Peso": 58,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Clarice",
    "Idade": 18,
    "Altura": 1.80,
    "Peso": 65,
    "IMC": 0,
    "CategoriaIMC": "Pés pequininhos..."
},
{
    "Nome": "Ana",
    "Idade": 17,
    "Altura": 1.71,
    "Peso": 66,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Paulo",
    "Idade": 17,
    "Altura": 1.62,
    "Peso": 68,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Pedro",
    "Idade": 80,
    "Altura": 1.83,
    "Peso": 63,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Marcos",
    "Idade": 17,
    "Altura": 1.63,
    "Peso": 58,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Julia",
    "Idade": 18,
    "Altura": 1.74,
    "Peso": 65,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Juliana",
    "Idade": 17,
    "Altura": 1.71,
    "Peso": 66,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Amanda",
    "Idade": 17,
    "Altura": 1.62,
    "Peso": 68,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Aline",
    "Idade": 80,
    "Altura": 1.83,
    "Peso": 63,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "João",
    "Idade": 17,
    "Altura": 1.63,
    "Peso": 58,
    "IMC": 0,
    "CategoriaIMC": "N/A"
},
{
    "Nome": "Maria",
    "Idade": 18,
    "Altura": 1.80,
    "Peso": 65,
    "IMC": 0,
    "CategoriaIMC": "N/A"
}
];

//função para calcular o IMC com o objeto Pessoas e editar o IMC de cada pessoa
function calcularIMC() {
    for (var i = 0; i < Pessoas.length; i++) {
        //Calculando o IMC de cada pessoa
        var pessoa = Pessoas[i];
        pessoa.IMC = pessoa.Peso / (pessoa.Altura * pessoa.Altura);    

        //Categorizando o IMC de cada pessoa
        if (pessoa.IMC < 18.5) {
            pessoa.CategoriaIMC = "Abaixo do peso!";
        } else if (pessoa.IMC >= 18.5 && pessoa.IMC < 25) {
            pessoa.CategoriaIMC = "Peso normal!";
        } else if (pessoa.IMC >= 25 && pessoa.IMC < 30) {
            pessoa.CategoriaIMC = "Sobrepeso!";
        } else if (pessoa.IMC >= 30 && pessoa.IMC < 35) {
            pessoa.CategoriaIMC = "Obesidade grau I !";
        } else if (pessoa.IMC >= 35 && pessoa.IMC < 40) {
            pessoa.CategoriaIMC = "Obesidade grau II !";
        } else {
            pessoa.CategoriaIMC = "Obesidade grau III !";
        }
    }
};

calcularIMC();

//função para mostrar o nome e o IMC de cada pessoa de acordo com o parâmetro passado
function mostrarIMC() {
    var Numero = document.getElementById("Numero").value;
    Numero--;
    var Pessoa = Pessoas[Numero];
    if ( Numero < 0 || Numero > 19){
        document.getElementById("resultado").innerHTML = "Número inválido!";
    }else{
        var texto = "";
        texto += Pessoa.Nome + " - " + Pessoa.IMC.toFixed(2) + " Categorizado(a): "+ Pessoa.CategoriaIMC +"<br>";
        document.getElementById("resultado").innerHTML = texto;
    };
};

function separarPorCategoria(){
    //vetor com a quantidade de cada pessoa por categoria
    var tabela = {
        "Abaixo do peso!": 0,
        "Peso normal!": 0,
        "Sobrepeso!": 0,
        "Obesidade grau I !": 0,
        "Obesidade grau II !": 0,
        "Obesidade grau III !": 0
    };
    //Contagem de cada pessoa por categoria
    for (var i = 0; i < Pessoas.length; i++) {
        var pessoa = Pessoas[i];
        tabela[pessoa.CategoriaIMC] += 1;
    }
    //Mostrar a tabela
    var texto = "";
    for (var categoria in tabela) {
        texto += categoria + ": " + tabela[categoria] + "<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
};

//Mostrar todos em uma lista.
function mostrarTodos(){
    var texto = "";
    for (var i = 0; i < Pessoas.length; i++) {
        var lugar = i + 1;
        var pessoa = Pessoas[i];
        texto += lugar + " | " + pessoa.Nome + " - " + pessoa.IMC.toFixed(2) + " Categorizado(a): "+ pessoa.CategoriaIMC +"<br>";
    }
    document.getElementById("resultado").innerHTML = texto;
}