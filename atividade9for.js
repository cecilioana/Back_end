import entradaDados from 'readline-sync';

for (let i = 1; i <= 2; i++) {
    // Ler o nome e o salário bruto da pessoa
    let nome = entradaDados.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = entradaDados.questionFloat(`Informe o salário de ${nome}: `);
    // Calcular o imposto de renda conforme a tabela
    let impostoRenda = 0;
    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }
    // Imprimir o nome e o valor do imposto de renda
    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);}