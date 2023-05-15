//Div etapas do formulário
const dadosPessoais = document.getElementById("dadosPessoais");
const objetivo = document.getElementById("objetivoP");
const formacaoAcademica = document.getElementById("formacaoAcademica");
const experienciaProfissional = document.getElementById("experienciaProfissional");

//Funções Formação acadêmica
import adicionarFormacao from "./formAcad.js";
import {mostrarDataConclusao} from "./formAcad.js";
const nivelFormacao = document.getElementById("nivelFormacao");
const addFormAcad = document.getElementById("addFormAcad");
const listaFormacao = document.getElementById("listaFormacao");
mostrarDataConclusao();
addFormAcad.addEventListener("click", adicionarFormacao );
nivelFormacao.addEventListener("change", mostrarDataConclusao);

//Funções Experiência profissional
import adicionarExperiencia from "./ExpProf.js";
import { mostrarCamposExpProf } from "./ExpProf.js";
const addExpProf = document.getElementById("addExpProf");
const semExp = document.getElementById("semExperiencia");
const listaExpProf = document.getElementById("listaExpProf");

semExp.addEventListener("checked", mostrarCamposExpProf);
addExpProf.addEventListener("click", adicionarExperiencia);


//Função Proximo/Voltar/Gerar
const btnNext = document.getElementById("btnNext");
const btnBack = document.getElementById("btnBack");
const btnGerar = document.getElementById("btnSubmit");

var Etapa = 1;

function next() {
    if (Etapa == 1) {
        btnBack.style.display = "none";
        dadosPessoais.style.display = "block";
        objetivo.style.display = "none";
    } else if (Etapa == 2) {
        btnBack.style.display = "block";
        dadosPessoais.style.display = "none";
        objetivo.style.display = "block";
        formacaoAcademica.style.display = "none";
        listaFormacao.style.display = "none";
    } else if(Etapa == 3) {
        objetivo.style.display = "none";
        formacaoAcademica.style.display = "block";
        listaFormacao.style.display = "block";
        experienciaProfissional.style.display = "none";
        listaExpProf.style.display = "none";
    } else if (Etapa == 4) {
        formacaoAcademica.style.display = "none";
        listaFormacao.style.display = "none";
        experienciaProfissional.style.display = "block";
        listaExpProf.style.display = "block";
    } else if (Etapa == 5) {
        experienciaProfissional.style.display = "none";
        listaExpProf.style.display = "none";
        Idiomas
    } else if (Etapa == 6) {
        btnGerar.style.display = "none";
        btnNext.style.display = "block";
        Cursos
    
    } else if (Etapa == 7) {
        btnNext.style.display = "none";
        btnGerar.style.display = "block";
    }
}

next();

btnNext.addEventListener("click", function(event) {
    event.preventDefault();
    Etapa++;
    next();
});

btnBack.addEventListener("click", function(event) {
    event.preventDefault();
    Etapa--;
    next();
});