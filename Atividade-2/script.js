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
    "Peso": 150,
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
    "Peso": 50,
    "IMC": 0,
    "CategoriaIMC": "N/A"
}
];

//função para calcular o IMC com o objeto Pessoas e editar o IMC de cada pessoa
function calcularIMC() {
    for (var i = 0; i < Pessoas.length; i++) {
        var pessoa = Pessoas[i];
        pessoa.IMC = pessoa.Peso / (pessoa.Altura * pessoa.Altura);

        if(Pessoas[i].IMC <= 18.5){
            Pessoas[i].CategoriaIMC = "Abaixo do peso!"
        }else if(Pessoas[i].IMC <= 24.9){
            Pessoas[i].CategoriaIMC = "Peso normal!"
        }else if(Pessoas[i].IMC <= 29.9){
            Pessoas[i].CategoriaIMC = "Sobrepeso!"
        }else if(Pessoas[i].IMC <= 34.9){
            Pessoas[i].CategoriaIMC = "Obesidade grau I !"
        }else if(Pessoas[i].IMC <= 39.9){
            Pessoas[i].CategoriaIMC = "Obesidade grau II !"
        }else{
            Pessoas[i].CategoriaIMC = "Obesidade grau III !"
        }
}
};
calcularIMC();
console.log(Pessoas);

//função para mostrar o nome e o IMC de cada pessoa 
function mostrarIMC(Pessoa) {
        var texto = "";
        texto += Pessoa.Nome + " - " + Pessoa.IMC.toFixed(2) + " Categorizado(a): "+ Pessoa.CategoriaIMC +"<br>";

        document.getElementById("resultado").innerHTML = texto;
    };

function exibirCategorias(){
    var AbaixoP = 0;
    var Normal = 0;
    var Sobrepeso = 0;
    var ObG1 = 0;
    var ObG2 = 0;
    var ObG3 = 0;

    for(var i = 0; i < Pessoas.length; i++){
        var Pessoa = Pessoas[i];
        
        if(Pessoa.CategoriaIMC = "Abaixo do peso!"){
            AbaixoP++;
        }else if(Pessoa.CategoriaIMC = "Peso normal!"){

        }else if
    }
}