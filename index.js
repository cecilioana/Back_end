const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraimc');
const { json } = require('express/lib/response');


app.get ('/',(req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
    let status= calculadoraIMC.retornaStatusIMC(imc);
    if (calculadoraIMC.validaParametro(req.query.peso) && calculadoraIMC.validaParametro(req.query.altura)){
        res.json({imc: imc, status : status})
    }
    else{
        res.status(400).json({'Erro': 'Peso ou altura inválidos'})
    }
});

app.listen (8080, () => {
    let data= new Date();
    console.log("Servidor iniciado em " + data)
});