import entradaDados from "readline-sync"
let num=entradaDados.questionInt("Digite um número: ");
let cont=0;
while (cont<=10){
    let tabuada= num*cont;
    console.log(`${num}X${cont}=${tabuada}`)
    cont++;
};