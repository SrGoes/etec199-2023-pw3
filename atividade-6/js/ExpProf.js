const semExp = document.getElementById("semExperiencia");
const camposExpProf = document.getElementById("camposExpProf");
const empresa = document.getElementById("empresa");
const cargo = document.getElementById("cargo");
const dataInicio = document.getElementById("dataInicioE");
const dataSaida = document.getElementById("dataSaida");
const atividades = document.getElementById("atividades");
const listaExpProf = document.getElementById("listaExpProf");

export default function adicionarExperiencia(event) {
    event.preventDefault();
    if (validarCampos()) {
        const item = document.createElement("div");
        item.setAttribute("class", `expProf-${listaExpProf.childElementCount}`);
        item.setAttribute("id", `expProf-${listaExpProf.childElementCount}`);
        if (semExp.checked) {
            item.innerHTML = `
                <h3>Experiência Profissional: Sem Experiência</h3>`;
        } else {
            item.innerHTML = `
                <h3>Empresa: ${empresa.value}</h3>
                <p>Cargo: ${cargo.value}</p>
                <p>Data de início: ${formatarData(dataInicio.value)}</p>
                <p>Data de saída: ${formatarData(dataSaida.value)}</p>
                <p>Atividades: ${atividades.value}</p>`;
        }
        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.addEventListener("click", () => {
            item.remove();
        });

        item.appendChild(btnRemover);
        listaExpProf.appendChild(item);

        semExp.checked = false;
        empresa.value = "";
        cargo.value = "";
        dataInicio.value = "";
        dataSaida.value = "";
        atividades.value = "";
    }
}

export function mostrarCamposExpProf() {
    if (semExp.checked) {
        camposExpProf.style.display = "none";
        adicionarExperiencia(event);
    } else {
        camposExpProf.style.display = "block";
    }
}

function validarCampos() {
    const campos = [empresa, cargo, dataInicio, dataSaida, atividades];
    for (const campo of campos) {
        if (listaExpProf.childElementCount >= 3) {
            alert("Você já adicionou 3 experiências!");
            return false;
        } else if (campo.value === "") {
            alert("Preencha todos os campos para adicionar uma Experiência Profissional!");
            return false;
        }
    }
    return true;
}

function formatarData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
}
