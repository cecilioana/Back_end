import entradaDados from "readline-sync";
let valor1=entradaDados.questionFloat("Digite o primeiro numero: ");
let valor2=entradaDados.questionFloat("Digite o segundo numero: ");
let operacao=entradaDados.question("Digite a operação que deseja realizar(+,-,/,*): ");
let soma=(valor1+valor2);
let subtracao=valor1-valor2;
let multiplicacao=valor1*valor2;
let divisao=valor1/valor2;
switch(valor1,valor2,operacao){
    case "+":
        console.log(`A soma dos números é ${soma}`);
        break;
    case "-":
        console.log(`A subtração dos números é ${subtracao}`);
        break;
    case "/":
        console.log(`A divisão dos números é ${divisao}`);
        break;
    case "*":
        console.log(`A multiplicação dos números é ${multiplicacao}`);
        break;
    default:
        console.log("Digite uma operação e um número válido.")
        break;
}