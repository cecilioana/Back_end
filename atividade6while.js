import entradaDados from "readline-sync";
let numAlunos = entradaDados.questionInt("Informe o número de alunos da turma: ")
// Variáveis para armazenar a soma das médias de todos os alunos e o contador de aluno atual
let somaMedias = 0;
let contadorAlunos = 1;
// Loop enquanto ainda houver alunos a serem processados
while (contadorAlunos <= numAlunos) {
    console.log(`Aluno ${contadorAlunos}:`);
    // Variável para armazenar a soma das notas do aluno
    let somaNotas = 0;
    let contadorBimestres = 1;
    // Loop para ler as notas dos 4 bimestres de cada aluno
    while (contadorBimestres <= 4) {
        let nota = entradaDados.questionInt(`Digite a nota do ${contadorBimestres}º bimestre para o aluno ${contadorAlunos}: `);
        somaNotas = somaNotas + nota;
        contadorBimestres++;
    }
    // Calcular a média do aluno
    let mediaAluno = somaNotas / 4;
    // Adicionar a média do aluno à soma das médias
    somaMedias += mediaAluno;
    // Imprimir a média do aluno
    console.log(`Média do aluno ${contadorAlunos}: ${mediaAluno.toFixed(2)}`);
    // Avançar para o próximo aluno
    contadorAlunos++;
}
// Calcular a média geral da turma
let mediaGeralTurma = somaMedias / numAlunos;
// Imprimir a média geral da turma
console.log(`Média geral da turma: ${mediaGeralTurma.toFixed(2)}`);