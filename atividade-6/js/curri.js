//Pegando o elemento do currículo
const content = document.getElementById("curriculo");

export default function gerarCurriculo() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const dataNasc = new Date(document.getElementById("dataNascimento").value);
    const dataNascFormatada = `${dataNasc.getDate()}/${dataNasc.getMonth() + 1}/${dataNasc.getFullYear()}`;
    const estadoCivil = document.getElementById("estadoCivil").value;
    const estado = document.getElementById("estado").value;
    const CEP = document.getElementById("cep").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const objetivo = document.getElementById("objetivo").value;
    const listaFormacao = document.getElementById("listaFormacao");
    const listaExpProf = document.getElementById("listaExpProf");
    const listaCursos = document.getElementById("listaCursos");
    const listaIdiomas = document.getElementById("listaIdiomas");
    
    //Dados Pessoais
    let dadosPessoais = document.createElement("div");
    dadosPessoais.id = "dpCV";
    dadosPessoais.className = "dpCV";

    let nomeCompleto = document.createElement("h1");
    nomeCompleto.textContent = `${nome} ${sobrenome}`;

    let dados = document.createElement("p");
    dados.textContent = `Data de Nascimento: ${dataNascFormatada} | Estado Civil: ${estadoCivil} | ${estado} - ${CEP}`;

    let contatos = document.createElement("p");
    contatos.textContent = `E-mail: ${email} | Telefone: ${telefone}`;

    dadosPessoais.appendChild(nomeCompleto);
    dadosPessoais.appendChild(dados);
    dadosPessoais.appendChild(contatos);

    //objetivo profissional
    let objetivoProfissional = document.createElement("div");
    objetivoProfissional.id = "objetivoProfissional";
    objetivoProfissional.className = "objetivoProfissional";

    let objetivoProfissionalTitulo = document.createElement("h2");
    objetivoProfissionalTitulo.textContent = "Objetivo Profissional";

    let objetivoProfissionalTexto = document.createElement("p");
    objetivoProfissionalTexto.textContent = objetivo;

    objetivoProfissional.appendChild(objetivoProfissionalTitulo);
    objetivoProfissional.appendChild(objetivoProfissionalTexto);

    //formação acadêmica
    let formacaoAcademica = document.createElement("div");
    formacaoAcademica.id = "faCV";
    formacaoAcademica.className = "faCV";

    let formacaoAcademicaTitulo = document.createElement("h2");
    formacaoAcademicaTitulo.textContent = "Formação Acadêmica";

    formacaoAcademica.appendChild(formacaoAcademicaTitulo);

    const formacoes = [];
    for (let i = 0; i < listaFormacao.childElementCount; i++) {
        const formacao = listaFormacao.children[i];
        const nivel = formacao.children[0].innerText.split(": ")[1];
        const instituicao = formacao.children[1].innerText.split(": ")[1];
        const curso = formacao.children[2].innerText.split(": ")[1];
        const dataInicio = formacao.children[3].innerText.split(": ")[1];
        const dataConclusao = formacao.children[4].innerText.split(": ")[1];
        formacoes.push({ nivel, instituicao, curso, dataInicio, dataConclusao });
    }

    for (const formacao of formacoes) {
        let formacaoAcademicaItem = document.createElement("div");
        formacaoAcademicaItem.className = "formacaoAcademicaItem";

        let formacaoAcademicaItemTitulo = document.createElement("h3");
        formacaoAcademicaItemTitulo.innerHTML = `<span>${formacao.dataInicio} - ${formacao.dataConclusao}</span>${formacao.nivel} - ${formacao.instituicao}`;

        let formacaoAcademicaItemCurso = document.createElement("p");
        formacaoAcademicaItemCurso.textContent = `${formacao.curso}`;

        formacaoAcademicaItem.appendChild(formacaoAcademicaItemTitulo);
        formacaoAcademicaItem.appendChild(formacaoAcademicaItemCurso);

        formacaoAcademica.appendChild(formacaoAcademicaItem);
    }

    //experiência profissional
    let experienciaProfissional = document.createElement("div");
    experienciaProfissional.id = "epCV";
    experienciaProfissional.className = "epCV";

    let experienciaProfissionalTitulo = document.createElement("h2");
    experienciaProfissionalTitulo.textContent = "Experiência Profissional";

    experienciaProfissional.appendChild(experienciaProfissionalTitulo);

    const experiencias = [];
    for (let i = 0; i < listaExpProf.childElementCount; i++) {
        const experiencia = listaExpProf.children[i];
        if(experiencia.children.length == 2){
            const semExperiencia = "Sim";
            experiencias.push({ semExperiencia });
        } else {
        console.log(experiencia);
        const empresa = experiencia.children[0].innerText.split(": ")[1];
        const cargo = experiencia.children[1].innerText.split(": ")[1];
        const dataInicio = experiencia.children[2].innerText.split(": ")[1];
        const dataSaida = experiencia.children[3].innerText.split(": ")[1];
        const atividades = experiencia.children[4].innerText.split(": ")[1];
        experiencias.push({ empresa, cargo, dataInicio, dataSaida, atividades });
        }
    }

    for (const experiencia of experiencias) {
        if(experiencia.semExperiencia == "Sim"){
            let experienciaProfissionalItem = document.createElement("div");
            experienciaProfissionalItem.className = "experienciaProfissionalItem";

            let experienciaProfissionalItemTitulo = document.createElement("h3");
            experienciaProfissionalItemTitulo.textContent = "Sem Experiência Profissional";

            experienciaProfissionalItem.appendChild(experienciaProfissionalItemTitulo);

            experienciaProfissional.appendChild(experienciaProfissionalItem);
        } else { 
            let experienciaProfissionalItem = document.createElement("div");
            experienciaProfissionalItem.className = "experienciaProfissionalItem";

            let experienciaProfissionalItemTitulo = document.createElement("h3");
            experienciaProfissionalItemTitulo.innerHTML = `<span>${experiencia.dataInicio} - ${experiencia.dataSaida}</span>${experiencia.empresa} - ${experiencia.cargo}`;

            let experienciaProfissionalItemAtividades = document.createElement("p");
            experienciaProfissionalItemAtividades.textContent = `Atividades: ${experiencia.atividades}`;

            experienciaProfissionalItem.appendChild(experienciaProfissionalItemTitulo);
            experienciaProfissionalItem.appendChild(experienciaProfissionalItemAtividades);

            experienciaProfissional.appendChild(experienciaProfissionalItem);
    }

    //cursos
    let cursos = document.createElement("div");
    cursos.id = "cursosCV";
    cursos.className = "cursosCV";

    let cursosTitulo = document.createElement("h2");
    cursosTitulo.textContent = "Cursos";

    cursos.appendChild(cursosTitulo);

    const cursosLista = [];
    for (let i = 0; i < listaCursos.childElementCount; i++) {
        const curso = listaCursos.children[i];
        const nome = curso.children[0].innerText.split(": ")[1];
        const instituicao = curso.children[1].innerText.split(": ")[1];
        const dataInicio = curso.children[2].innerText.split(": ")[1];
        const dataConclusao = curso.children[3].innerText.split(": ")[1];
        cursosLista.push({ nome, instituicao, dataInicio, dataConclusao });
    }

    for (const curso of cursosLista) {
        let cursosItem = document.createElement("div");
        cursosItem.className = "cursosItem";

        let cursosItemTitulo = document.createElement("h3");
        cursosItemTitulo.textContent = `${curso.nome} - ${curso.instituicao}`;

        let cursosItemData = document.createElement("p");
        cursosItemData.textContent = `${curso.dataInicio} - ${curso.dataConclusao}`;

        cursosItem.appendChild(cursosItemTitulo);
        cursosItem.appendChild(cursosItemData);

        cursos.appendChild(cursosItem);
    }

    //idiomas
    let idiomas = document.createElement("div");
    idiomas.id = "idiomasCV";
    idiomas.className = "idiomasCV";

    let idiomasTitulo = document.createElement("h2");
    idiomasTitulo.textContent = "Idiomas";

    idiomas.appendChild(idiomasTitulo);

    const idiomasLista = [];
    for (let i = 0; i < listaIdiomas.childElementCount; i++) {
        const idioma = listaIdiomas.children[i];
        const nome = idioma.children[0].innerText.split(": ")[1];
        const nivel = idioma.children[1].innerText.split(": ")[1];
        idiomasLista.push({ nome, nivel });
    }

    for (const idioma of idiomasLista) {
        let idiomasItem = document.createElement("div");
        idiomasItem.className = "idiomasItem";

        let idiomasItemTitulo = document.createElement("h3");
        idiomasItemTitulo.textContent = `${idioma.nome} - ${idioma.nivel}`;

        idiomasItem.appendChild(idiomasItemTitulo);

        idiomas.appendChild(idiomasItem);
    }

    content.appendChild(dadosPessoais);
    content.appendChild(objetivoProfissional);
    content.appendChild(formacaoAcademica);
    content.appendChild(experienciaProfissional);
    content.appendChild(cursos);
    content.appendChild(idiomas);
}
}

export function pdfCV(){
    const CV = document.getElementById("curriculo");

    const options = {
        margin: 0,
        filename: 'curriculo.pdf',
        image:  { type: 'jpeg', quality: 1 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(options).from(CV).save();

}