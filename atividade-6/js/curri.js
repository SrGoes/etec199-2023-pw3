//Pegando parametros da URL
const urlParams = new URLSearchParams(window.location.search);

//Criando o Curriculo
const content = document.createElement("content");
document.body.appendChild(content);

// Dados Pessoais - Informações
const name = urlParams.get("name");
const dataNasc = new Date(urlParams.get("dataNasc"));
const email = urlParams.get("email");
const phone = urlParams.get("phone");
const estadoCivil = urlParams.get("estadoCivil");
const address = urlParams.get("address");

//Dados Pessoais - Criando elementos e alimentando com dados 
const nameHeading = document.createElement("h2");
nameHeading.textContent = name;
const dataNascPara = document.createElement("p");
dataNascPara.textContent = "Data de Nascimento: " + dataNasc.getDate() + "/" + dataNasc.getMonth() + "/" + dataNasc.getFullYear();
const emailPara = document.createElement("p");
emailPara.textContent = "E-mail: " + email;
const phonePara = document.createElement("p");
phonePara.textContent = "Telefone: " + phone;
const estadoPara = document.createElement("p");
estadoPara.textContent = "Estado Civil: " + estadoCivil;
const addressPara = document.createElement("p");
addressPara.textContent = "Endereço: " + address;

//Objetivo profissional - Informações
const objetivo = urlParams.get("objetivo");

//Objetivo profissional - Criando elementos e alimentando com dados
const objetivoHeading = document.createElement("h2");
const objetivoPara = document.createElement("p");
objetivoHeading.textContent = "Objetivo Profissional";
objetivoPara.textContent = objetivo;

// Formação Acadêmica - Definindo as informações necessarias
const institutions = [];
const degrees = [];
const years = [];

// Formação Acadêmica - Pegando as informações da URL
urlParams.forEach(function(value, key) {
    if (key.startsWith("institution")) {
        institutions.push(value);
    } else if (key.startsWith("degree")) {
        degrees.push(value);
    } else if (key.startsWith("year")) {
        years.push(value);
    }
});

// Formação Acadêmica - Criando Lista
const educationHeading = document.createElement("h2");
educationHeading.textContent = "Formação Acadêmica";
const educationList = document.createElement("ul");

// Formação Acadêmica - Criando elementos e alimentando com dados
for (let i = 0; i < institutions.length; i++) {
    const institutionItem = document.createElement("li");
    institutionItem.textContent = institutions[i] + " - " + degrees[i] + " (" + years[i] + ")";
    educationList.appendChild(institutionItem);
}


// Adicionando tudo ao curriculo
content.appendChild(nameHeading);
content.appendChild(dataNascPara);
content.appendChild(emailPara);
content.appendChild(phonePara);
content.appendChild(estadoPara);
content.appendChild(addressPara);

content.appendChild(objetivoHeading);
content.appendChild(objetivoPara);

content.appendChild(educationHeading);
content.appendChild(educationList);