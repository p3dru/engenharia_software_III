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
        if (this.quantidadeCombustivel < this.capacidadeMaxima * 0.1) {
            return true;
        }
        return false;
    };
    Carro.prototype.testarCapacidadeNova = function (quantidadeNova) {
        if ((this.quantidadeCombustivel + quantidadeNova) <= this.capacidadeMaxima) {
            this.quantidadeCombustivel += quantidadeNova;
            return true;
        }
        return false;
    };
    return Carro;
}());
var carro = new Carro(4);
console.log(carro.testarCapacidadeAtual());
console.log(carro.testarCapacidadeNova(80));
