import entradaDados from "readline-sync";
let categoria=entradaDados.question("Qual sua categoria de bonificação(A,B,C,D): ")
let salario=entradaDados.questionFloat("Digite o seu salário: ")
switch(categoria){
    case "A":
        let bonA=salario*0.5+salario
        console.log(`Seu novo salário sera de ${bonA.toFixed(2)} reais.`)
        break;
    case "B":
        let bonB=salario*0.10+salario
        console.log(`Seu novo salário sera de ${bonB.toFixed(2)} reais.`)
        break;
    case "C":
        let bonC=salario*0.15+salario
        console.log(`Seu novo salário sera de ${bonC.toFixed(2)} reais.`)
        break;
    case "D":
        let bonD=salario*0.20+salario
        console.log(`Seu novo salário sera de ${bonD.toFixed(2)} reais.`)
        break;
    default:
        console.log("Digite uma categoria valida por favor!!");
        break;
}