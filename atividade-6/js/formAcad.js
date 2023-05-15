const nivelFormacao = document.getElementById("nivelFormacao");
const curso = document.getElementById("curso");
const instituicao = document.getElementById("instituicao");
const dataInicio = document.getElementById("dataInicioF");
const dataConclusao = document.getElementById("dataConclusao");
const Conclusao = document.getElementById("Conclusao");
const dataConclusaoEsperada = document.getElementById("dataConclusaoEsperada");
const listaFormacao = document.getElementById("listaFormacao");

export default function adicionarFormacao(event){
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
}
//refaça a função mas se já tiver 3 formações, não adicione mais



function validarCampos() {
    const campos = [nivelFormacao, curso, instituicao, dataInicio];
    for (const campo of campos) {
        if (listaFormacao.childElementCount >= 3) {
            alert("Você já adicionou 3 formações!");
            return false;
        } else if (campo.value === "") {
            alert("Por favor, preencha todos os campos para adicionar uma Formação academica");
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

export function mostrarDataConclusao() {
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