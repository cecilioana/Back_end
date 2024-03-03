class Veiculo{
    constructor(marca,modelo,ano){ 
        this.marca=marca;
        this.modelo=modelo;
        this.ano=modelo;
    }//Adicionar os objetos
    exibirDetalhes(){
        return `Marca:${this.marca}, Modelo:${this.modelo},Ano:${this.ano}`
    }//Exibir as informações 
};
const carro = new Veiculo("Toyota","Corrola","2022");//adicionar as informações aos objetos da classe 
const motocicleta= new Veiculo ("Honda","CBR 600RR","2021");
console.log(carro.exibirDetalhes());//imprimir 
console.log(motocicleta.exibirDetalhes());
