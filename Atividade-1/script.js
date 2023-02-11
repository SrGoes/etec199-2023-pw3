var Pessoas = [{
    "Nome": "Isis",
    "Idade": 17,
    "Altura": 1.72,
    "Peso": 60,
    "IMC": 0
},
{
    "Nome": "Alessandra",
    "Idade": 17,
    "Altura": 1.62,
    "Peso": 68,
    "IMC": 0
},
{
    "Nome": "Magno",
    "Idade": 80,
    "Altura": 1.83,
    "Peso": 60,
    "IMC": 0
},
{
    "Nome": "Lorena",
    "Idade": 17,
    "Altura": 1.63,
    "Peso": 58,
    "IMC": 0
},
{
    "Nome": "Gabriel",
    "Idade": 18,
    "Altura": 1.74,
    "Peso": 60,
    "IMC": 0
}
];

//função para calcular o IMC com o objeto Pessoas e editar o IMC de cada pessoa
function calcularIMC() {
    for (var i = 0; i < Pessoas.length; i++) {
        var pessoa = Pessoas[i];
        pessoa.IMC = pessoa.Peso / (pessoa.Altura * pessoa.Altura);
}
};
calcularIMC();

//função para mostrar o nome e o IMC de cada pessoa 
function mostrarIMC(Pessoa) {
        var texto = "";
        texto += Pessoa.Nome + " - " + Pessoa.IMC.toFixed(2) + "<br>";

        document.getElementById("resultado").innerHTML = texto;
    };