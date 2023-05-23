const curso = document.getElementById("cursoC");
const instituicao = document.getElementById("instituicaoC");
const dataInicio = document.getElementById("dataInicioC");
const dataConclusao = document.getElementById("dataConclusaoC");
const listaCursos = document.getElementById("listaCursos");

function validarCampos() {
    const campos = [curso, instituicao, dataInicio, dataConclusao];
    for (const campo of campos) {
        if (listaCursos.childElementCount >= 3) {
            alert("Você já adicionou o máximo de Cursos!");
            return false;
        } else if (campo.value === "") {
            alert("Preencha todos os campos para adicionar um Curso!");
            return false;
        }
    }
    return true;
}

function formatarData(data) {
    const dataArray = data.split("-");
    return `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`;
}

export default function adicionarCurso(event) {
    event.preventDefault();
    if (validarCampos()) {
        const item = document.createElement("div");
        item.setAttribute("class", `curso-${listaCursos.childElementCount}`);
        item.setAttribute("id", `curso-${listaCursos.childElementCount}`);
        item.innerHTML = `
            <h3>Curso: ${curso.value}</h3>
            <p>Instituição: ${instituicao.value}</p>
            <p>Data de Início: ${formatarData(dataInicio.value)}</p>
            <p>Data de Conclusão: ${formatarData(dataConclusao.value)}</p>`;

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover Curso";
        btnRemover.addEventListener("click", () => {
            item.remove();
        });

        item.appendChild(btnRemover);
        listaCursos.appendChild(item);

        curso.value = "";
        instituicao.value = "";
        dataInicio.value = "";
        dataConclusao.value = "";
    }
}