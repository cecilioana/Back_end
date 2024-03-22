// Gerar um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// Inicializar a variável de tentativa do usuário
let tentativa;
// Iniciar o loop do-while
do {
    // Solicitar ao usuário que faça uma tentativa
    tentativa = rl.questionInt("Tente adivinhar o número (entre 1 e 100): ");
    // Verificar se a tentativa está correta, maior ou menor que o número aleatório
    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o número correto.");
    } else if (tentativa < numeroAleatorio) {
        console.log("Tente um número maior.");
    } else {
        console.log("Tente um número menor.");
    }
    // Continuar o loop enquanto a tentativa estiver incorreta
} while (tentativa !== numeroAleatorio);