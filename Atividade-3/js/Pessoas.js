export default class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.imc = 0;
        this.categoriaIMC = "N/A";
    }
    calcularIMC() {
        this.imc = this.peso / (this.altura * this.altura);
    }
    categorizarIMC() {
        if (this.imc < 18.5) {
            this.categoriaIMC = "Abaixo do peso!";
        } else if (this.imc >= 18.5 && this.imc < 25) {
            this.categoriaIMC = "Peso normal!";
        } else if (this.imc >= 25 && this.imc < 30) {
            this.categoriaIMC = "Sobrepeso!";
        } else if (this.imc >= 30 && this.imc < 35) {
            this.categoriaIMC = "Obesidade grau I !";
        } else if (this.imc >= 35 && this.imc < 40) {
            this.categoriaIMC = "Obesidade grau II !";
        } else {
            this.categoriaIMC = "Obesidade grau III !";
        }
    }
}

export let Pessoas = [
    {objeto: new Pessoa("João", 20, 1.80, 80)},
    {objeto: new Pessoa("Maria", 25, 1.60, 80)},
    {objeto: new Pessoa("José", 30, 1.70, 70)},
    {objeto: new Pessoa("Ana", 35, 1.50, 50)},
    {objeto: new Pessoa("Marcos", 40, 1.90, 90)},
    {objeto: new Pessoa("Julia", 45, 1.80, 80)},
    {objeto: new Pessoa("Pedro", 50, 1.70, 46)},
    {objeto: new Pessoa("Paulo", 55, 1.60, 76)},
    {objeto: new Pessoa("Mariana", 60, 1.50, 85)},
    {objeto: new Pessoa("Joana", 65, 1.40, 70)},
    {objeto: new Pessoa("Carlos", 70, 1.30, 80)},
    {objeto: new Pessoa("Carla", 75, 1.20, 200)},
    {objeto: new Pessoa("Ricardo", 80, 1.10, 100)},
    {objeto: new Pessoa("Rita", 85, 1.00, 75)},
    {objeto: new Pessoa("Roberto", 90, 1.90, 68)},
    {objeto: new Pessoa("Roberta", 95, 1.80, 76)},
    {objeto: new Pessoa("Rafael", 100, 1.70, 85)},
    {objeto: new Pessoa("Rafaela", 105, 1.60, 95)},
    {objeto: new Pessoa("Ronaldo", 110, 1.50, 74)},
    {objeto: new Pessoa("Ronalda", 115, 1.40, 95)}
];