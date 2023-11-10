let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";

while (adicionarMais !== "não") {
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais !== "sim" && adicionarMais !== "não") {
        alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

    if (adicionarMais === "não") {
        break;
    }

    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if (categoria === 'frutas') {
        frutas.push(comida);
    } else if (categoria === 'laticínios') {
        laticinios.push(comida);
    } else if (categoria === 'doces') {
        doces.push(comida);
    } else if (categoria === 'congelados') {
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi pré-definida.");
    }
}

let removerItem = "sim";

while (removerItem === "sim") {
    let categoriaARemover = prompt("De qual categoria você deseja remover um item: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    let itemRemover = "";

    if (categoriaARemover === 'frutas') {
        if (frutas.length > 0) {
            itemRemover = prompt(`Itens na categoria frutas: ${frutas}\nQual item você deseja remover?`);
            if (frutas.includes(itemRemover)) {
                frutas = frutas.filter(item => item !== itemRemover);
                console.log(`'${itemRemover}' foi removido da lista de frutas.`);
            } else {
                console.log("Não foi possível encontrar o item dentro da lista de frutas!");
            }
        } else {
            console.log("A lista de frutas está vazia.");
        }
    } else if (categoriaARemover === 'laticínios') {
        if (laticinios.length > 0) {
            itemRemover = prompt(`Itens na categoria laticínios: ${laticinios}\nQual item você deseja remover?`);
            if (laticinios.includes(itemRemover)) {
                laticinios = laticinios.filter(item => item !== itemRemover);
                console.log(`'${itemRemover}' foi removido da lista de laticínios.`);
            } else {
                console.log("Não foi possível encontrar o item dentro da lista de laticínios!");
            }
        } else {
            console.log("A lista de laticínios está vazia.");
        }
    } else if (categoriaARemover === 'doces') {
        if (doces.length > 0) {
            itemRemover = prompt(`Itens na categoria doces: ${doces}\nQual item você deseja remover?`);
            if (doces.includes(itemRemover)) {
                doces = doces.filter(item => item !== itemRemover);
                console.log(`'${itemRemover}' foi removido da lista de doces.`);
            } else {
                console.log("Não foi possível encontrar o item dentro da lista de doces!");
            }
        } else {
            console.log("A lista de doces está vazia.");
        }
    } else if (categoriaARemover === 'congelados') {
        if (congelados.length > 0) {
            itemRemover = prompt(`Itens na categoria congelados: ${congelados}\nQual item você deseja remover?`);
            if (congelados.includes(itemRemover)) {
                congelados = congelados.filter(item => item !== itemRemover);
                console.log(`'${itemRemover}' foi removido da lista de congelados.`);
            } else {
                console.log("Não foi possível encontrar o item dentro da lista de congelados!");
            }
        } else {
            console.log("A lista de congelados está vazia.");
        }
    } else {
        console.log("Essa categoria não foi pré-definida.");
    }

    removerItem = prompt("Deseja remover outro item? Responda 'sim' ou 'não'.");
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
