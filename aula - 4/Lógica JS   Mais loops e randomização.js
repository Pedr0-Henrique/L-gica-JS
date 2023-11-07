// Número aleatório a ser adivinhado entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let tentativaDoUsuario;

// Função para verificar se o número está correto
function verificaNumero() {
    tentativas++;

    if (tentativaDoUsuario === numeroSecreto) {
        alert(`Parabéns! Você acertou o número em ${tentativas} tentativa(s)`);
    } else if (tentativaDoUsuario < numeroSecreto) {
        alert("O número é maior. Tente novamente!");
        pedeNumero();
    } else {
        alert("O número é menor. Tente novamente!");
        pedeNumero();
    }
}

// Função para pedir o número ao usuário
function pedeNumero() {
    tentativaDoUsuario = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));

    if (tentativaDoUsuario) {
        verificaNumero();
    } else {
        alert("Por favor, insira um número válido.");
        pedeNumero();
        
    }
}

// Inicia o jogo
pedeNumero();
