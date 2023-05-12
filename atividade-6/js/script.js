//Dados Formação Academica
const nivelFormacao = document.getElementById("nivelFormacao");
const curso = document.getElementById("curso");
const instituicao = document.getElementById("instituicao");
const dataInicio = document.getElementById("dataInicio");
const dataConclusao = document.getElementById("dataConclusao");
const dataConclusaoEsperada = document.getElementById("dataConclusaoEsperada");
const addFormAcad = document.getElementById("addFormAcad");
const listaFormacao = document.getElementById("listaFormação");

//Divs Formação acadêmica
const Conclusao = document.getElementById("Conclusao");
const ConclusaoEsperada = document.getElementById("ConclusaoEsperada");

//EventListeners Formação acadêmica
nivelFormacao.addEventListener("change", mostrarDataConclusao);

addFormAcad.addEventListener("click", () => {
    event.preventDefault();
    if (validarCampos()) {
        const item = document.createElement("div");
        item.setAttribute("class", `formacao-${listaFormacao.childElementCount}`);
        item.setAttribute("id", `formacao-${listaFormacao.childElementCount}`);
        item.innerHTML = `
      <h3>Instituição: ${instituicao.value}</h3>
      <p>Nível de Formação: ${formatarNivel(nivelFormacao.value)}</p>
      <p>Curso: ${curso.value}</p>
      <p>Data de início: ${formatarData(dataInicio.value)}</p>`;
        if (nivelFormacao.value.endsWith("Comp")) {
            item.innerHTML += `<p>Data de conclusão: ${formatarData(dataConclusao.value)}</p>`;
        } else if (nivelFormacao.value.endsWith("Curs")) {
            item.innerHTML += `<p>Conclusão esperada: ${formatarMesAno(dataConclusaoEsperada.value)}</p>`;
        } else {
            item.innerHTML += `<p>Data de conclusão: ${formatarData(dataConclusao.value)}</p>`;
        }
        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.addEventListener("click", () => {
            item.remove();
        });

        item.appendChild(btnRemover);
        listaFormacao.appendChild(item);


        listaFormacao.appendChild(item);
        nivelFormacao.value = "";
        curso.value = "";
        instituicao.value = "";
        dataInicio.value = "";
        dataConclusao.value = "";
        dataConclusaoEsperada.value = "";
        mostrarDataConclusao();
    }
});

//Funções Formação acadêmica
function validarCampos() {
    const campos = [nivelFormacao, curso, instituicao, dataInicio];
    for (const campo of campos) {
        if (campo.value === "") {
            alert("Por favor, preencha todos os campos necessários!");
            return false;
        } else if (new Date(dataConclusao.value).getTime() < new Date(dataInicio.value).getTime()) {
            alert("A data de conclusão não pode ser anterior a data de início!");
            return false;
        } else if (dataConclusaoEsperada.value < dataInicio.value && nivelFormacao.value.endsWith("Curs")) {
            alert("A data de conclusão esperada não pode ser anterior a data de início!");
            return false;
        }
    }
    return true;
}

function formatarNivel(nivel) {
    switch (nivel) {
        case 'fundComp':
            return 'Fundamental Completo';
        case 'fundIncomp':
            return 'Fundamental Incompleto';
        case 'fundCurs':
            return 'Fundamental Cursando';
        case 'medioComp':
            return 'Médio Completo';
        case 'medioIncomp':
            return 'Médio Incompleto';
        case 'medioCurs':
            return 'Médio Cursando';
        case 'superiorComp':
            return 'Superior Completo';
        case 'superiorIncomp':
            return 'Superior Incompleto';
        case 'superiorCurs':
            return 'Superior Cursando';
        default:
            return '';
    }
}

function mostrarDataConclusao() {
    if (nivelFormacao.value.endsWith("Comp")) {
        ConclusaoEsperada.style.display = "none";
        Conclusao.style.display = "block";
    } else if (nivelFormacao.value.endsWith("Curs")) {
        Conclusao.style.display = "none";
        ConclusaoEsperada.style.display = "block";
    } else {
        Conclusao.style.display = "block";
        ConclusaoEsperada.style.display = "none";
    }
}

function formatarData(data) {
    const dataArray = data.split("-");
    return `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`;
}

function formatarMesAno(data) {
    const dataArray = data.split("-");
    const mes = dataArray[1];
    const ano = dataArray[0];
    return `${mes}/${ano}`;
}


//Função Proximo/Voltar/Gerar
const btnNext = document.getElementById("btnNext");
const btnBack = document.getElementById("btnBack");
const btnGerar = document.getElementById("btnSubmit");

const dadosPessoais = document.getElementById("dadosPessoais");
const objetivo = document.getElementById("objetivoP");
const formacaoAcademica = document.getElementById("formacaoAcademica");

var Etapa = 1;

function next() {
    if (Etapa == 1) {
        btnBack.style.display = "none";
        btnGerar.style.display = "none";
        dadosPessoais.style.display = "block";
        objetivo.style.display = "none";
        formacaoAcademica.style.display = "none";
    } else if (Etapa == 2) {
        btnBack.style.display = "block";
        btnNext.style.display = "block";
        btnGerar.style.display = "none";
        dadosPessoais.style.display = "none";
        objetivo.style.display = "block";
        formacaoAcademica.style.display = "none";
    } else if (Etapa == 3) {
        btnNext.style.display = "none";
        btnGerar.style.display = "block";
        dadosPessoais.style.display = "none";
        objetivo.style.display = "none";
        formacaoAcademica.style.display = "block";
        ConclusaoEsperada.style.display = "none";
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