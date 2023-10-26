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
        if (this.quantidadeCombustivel >= this.capacidadeMaxima * 0.1) {
            throw new Error('É necessário abastecer');
        }
        return true;
    }

    testarCapacidadeNova(quantidadeNova: number){
        if ((this.quantidadeCombustivel + quantidadeNova) > this.capacidadeMaxima) {
            throw new Error('Capacidade máxima do cobustível atingida');
            
        }

        this.quantidadeCombustivel += quantidadeNova;
        return true
    }
}


let carro = new Carro(4)

console.log(carro.testarCapacidadeAtual())
carro.testarCapacidadeNova(80);
