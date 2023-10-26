var Carro = /** @class */ (function () {
    function Carro(quantidadeCombustivel) {
        this.capacidadeMaxima = 50;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    Carro.prototype.getQuantidadeCombustivel = function () {
        return this.quantidadeCombustivel;
    };
    Carro.prototype.getCapacidadeMaxima = function () {
        return this.capacidadeMaxima;
    };
    Carro.prototype.testarCapacidadeAtual = function () {
        if (this.quantidadeCombustivel >= this.capacidadeMaxima * 0.1) {
            throw new Error('É necessário abastecer');
        }
        return true;
    };
    Carro.prototype.testarCapacidadeNova = function (quantidadeNova) {
        if ((this.quantidadeCombustivel + quantidadeNova) > this.capacidadeMaxima) {
            throw new Error('Capacidade máxima do cobustível atingida');
        }
        this.quantidadeCombustivel += quantidadeNova;
        return true;
    };
    return Carro;
}());
var carro = new Carro(4);
console.log(carro.testarCapacidadeAtual());
carro.testarCapacidadeNova(80);
