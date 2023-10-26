class Carro{
    quantidadeCombustivel: number;
    capacidadeMaxima: number = 50;

    constructor(quantidadeCombustivel: number){
        this.quantidadeCombustivel = quantidadeCombustivel;
        
    }


    getQuantidadeCombustivel(): number{
        return this.quantidadeCombustivel;
    }

    getCapacidadeMaxima(): number{
        return this.capacidadeMaxima;
    }

    testarCapacidadeAtual(){
        if (this.quantidadeCombustivel < this.capacidadeMaxima * 0.1) {
            return true;
        }
        return false;
    }

    testarCapacidadeNova(quantidadeNova: number){
        if ((this.quantidadeCombustivel + quantidadeNova)<= this.capacidadeMaxima) {
            this.quantidadeCombustivel += quantidadeNova;
            return true 
            
        }
        return false
    }
}


let carro = new Carro(4)

console.log(carro.testarCapacidadeAtual())
console.log(carro.testarCapacidadeNova(80));
