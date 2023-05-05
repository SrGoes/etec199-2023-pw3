const urlParams = new URLSearchParams(window.location.search);

// Dados Pessoais
const name = urlParams.get("name");
const email = urlParams.get("email");
const phone = urlParams.get("phone");
const address = urlParams.get("address");

// Formação Acadêmica
const institutions = [];
const degrees = [];
const years = [];

urlParams.forEach(function(value, key) {
  if (key.startsWith("institution")) {
    institutions.push(value);
  } else if (key.startsWith("degree")) {
    degrees.push(value);
  } else if (key.startsWith("year")) {
    years.push(value);
  }
});

// Experiência Profissional
const employers = [];
const jobTitles = [];
const jobDescriptions = [];
const jobStartDates = [];
const jobEndDates = [];

urlParams.forEach(function(value, key) {
  if (key.startsWith("employer")) {
    employers.push(value);
  } else if (key.startsWith("jobTitle")) {
    jobTitles.push(value);
  } else if (key.startsWith("jobDescription")) {
    jobDescriptions.push(value);
  } else if (key.startsWith("jobStartDate")) {
    jobStartDates.push(value);
  } else if (key.startsWith("jobEndDate")) {
    jobEndDates.push(value);
  }
});

// Criando os elementos do currículo
const content = document.getElementById("content");

const nameHeading = document.createElement("h2");
nameHeading.textContent = name;

const emailPara = document.createElement("p");
emailPara.textContent = "E-mail: " + email;

const phonePara = document.createElement("p");
phonePara.textContent = "Telefone: " + phone;

const addressPara = document.createElement("p");
addressPara.textContent = "Endereço: " + address;

// Formação Acadêmica
const educationHeading = document.createElement("h2");
educationHeading.textContent = "Formação Acadêmica";

const educationList = document.createElement("ul");

for (let i = 0; i < institutions.length; i++) {
  const institutionItem = document.createElement("li");
  institutionItem.textContent = institutions[i] + " - " + degrees[i] + " (" + years[i] + ")";
  educationList.appendChild(institutionItem);
}

// Experiência Profissional
const experienceHeading = document.createElement("h2");
experienceHeading.textContent = "Experiência Profissional";

const experienceList = document.createElement("ul");

for (let i = 0; i < employers.length; i++) {
  const employerItem = document.createElement("li");
  const jobTitlePara = document.createElement("p");
  const jobDescriptionPara = document.createElement("p");
  const jobDatePara = document.createElement("p");

  jobTitlePara.textContent = jobTitles[i];
  jobDescriptionPara.textContent = jobDescriptions[i];
  jobDatePara.textContent = jobStartDates[i] + " - " + jobEndDates[i];

  employerItem.appendChild(jobTitlePara);
  employerItem.appendChild(jobDescriptionPara);
  employerItem.appendChild(jobDatePara);

  experienceList.appendChild(employerItem);
}

// Adicionando tudo ao conteúdo
content.appendChild(nameHeading);
content.appendChild(emailPara);
content.appendChild(phonePara);
content.appendChild(addressPara);

content.appendChild(educationHeading);
content.appendChild(educationList);

content.appendChild(experienceHeading);
content.appendChild(experienceList);
