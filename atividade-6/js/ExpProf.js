const semExp = document.getElementById("semExperiencia");
const spSemExp = document.getElementById("spSemExp");
const camposExpProf = document.getElementById("camposExpProf");
const empresa = document.getElementById("empresa");
const cargo = document.getElementById("cargo");
const dataInicio = document.getElementById("dataInicioE");
const dataSaida = document.getElementById("dataSaida");
const atividades = document.getElementById("atividades");
const listaExpProf = document.getElementById("listaExpProf");

function validarCampos() {
    const campos = [empresa, cargo, dataInicio, dataSaida, atividades];
    for (const campo of campos) {
        if (listaExpProf.childElementCount >= 3) {
            alert("Você já adicionou o máximo de experiências!");
            return false;
        } else if(semExp.checked) {
            return true;
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

export default function adicionarExperiencia(event) {
    
    if (semExp.checked) {
        const item = document.createElement("div");
        item.setAttribute("class", `expProf-${listaExpProf.childElementCount}`);
        item.setAttribute("id", `expProf-${listaExpProf.childElementCount}`);
        item.innerHTML = `
            <h3>Experiência Profissional: Sem Experiência</h3>`;

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Adicionar Experiência";
        btnRemover.addEventListener("click", () => {
            item.remove();
            semExp.checked = false;
        });

        item.appendChild(btnRemover);
        listaExpProf.appendChild(item);

        camposExpProf.style.display = "none";

    } else if (validarCampos()) {
        const item = document.createElement("div");
        item.setAttribute("class", `expProf-${listaExpProf.childElementCount}`);
        item.setAttribute("id", `expProf-${listaExpProf.childElementCount}`);
        item.innerHTML = `
            <h3>Empresa: ${empresa.value}</h3>
            <p>Cargo: ${cargo.value}</p>
            <p>Atividades: ${atividades.value}</p>
            <p>Data de início: ${formatarData(dataInicio.value)}</p>
            <p>Data de saída: ${formatarData(dataSaida.value)}</p>`;
        
        const btnRemover = document.createElement("button");
                btnRemover.innerText = "Remover";
                btnRemover.addEventListener("click", () => {
                    item.remove();
                });
        
                item.appendChild(btnRemover);
                listaExpProf.appendChild(item);
                
                empresa.value = "";
                cargo.value = "";
                dataInicio.value = "";
                dataSaida.value = "";
                atividades.value = "";

    }
    event.preventDefault();
}

export function mostrarCamposExpProf() {
    if (semExp.checked) {
        camposExpProf.style.display = "block";
        listaExpProf.style.display = "block";
        adicionarExperiencia();
    } else {
        camposExpProf.style.display = "block";
        listaExpProf.style.display = "block";
    }
}

export function mostrarSemExp() {
    if (listaExpProf.childElementCount > 0) {
        spSemExp.style.display = "none";
    } else {
        spSemExp.style.display = "inline-block";
        camposExpProf.style.display = "block";
    }
}