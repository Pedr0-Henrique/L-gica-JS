// Solicita a área de especialização
const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";

// Escolha da linguagem com base na área selecionada
if (area === "Front-End") {
    linguagem = prompt("Você quer aprender React ou Vue?");
} else if (area === "Back-End") {
    linguagem = prompt("Você quer aprender C# ou Java?");
} else {
    alert("Você não inseriu uma área válida!");
}

// Escolha entre especialização na área selecionada ou se tornar Fullstack
const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para se desenvolver e se tornar Fullstack");
if (especialidadeOuFullstack == 1) {
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
} else if (especialidadeOuFullstack == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
} else {
    alert("Você não inseriu um valor válido!");
}

// Solicitação de mais tecnologias desejadas para aprender
let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok") {
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}

