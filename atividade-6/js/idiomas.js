const idioma = document.getElementById("idioma");
const nivelIdioma = document.getElementById("nivelIdioma");
const listaIdiomas = document.getElementById("listaIdiomas");

function validarCampos() {
    const campos = [idioma];
    for (const campo of campos) {
        if (listaIdiomas.childElementCount >= 3) {
            alert("Você já adicionou o máximo de Idiomas!");
            return false;
        } else if (campo.value === "") {
            alert("Preencha todos os campos para adicionar um Idioma!");
            return false;
        }
    }
    return true;
}

export default function adicionarIdioma(event) {
    event.preventDefault();
    if (validarCampos()) {
        const item = document.createElement("div");
        item.setAttribute("class", `idioma-${listaIdiomas.childElementCount}`);
        item.setAttribute("id", `idioma-${listaIdiomas.childElementCount}`);
        item.innerHTML = `
            <h3>Idioma: ${idioma.value}</h3>
            <p>Nível: ${nivelIdioma.value}</p>`;

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover Idioma";
        btnRemover.addEventListener("click", () => {
            item.remove();
        });

        item.appendChild(btnRemover);
        listaIdiomas.appendChild(item);

        idioma.value = "";
        nivelIdioma.value = "";
    }
}