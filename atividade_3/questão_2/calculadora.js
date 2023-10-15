var Adicao = /** @class */ (function () {
    function Adicao() {
    }
    Adicao.prototype.executar = function (number_1, number_2) {
        return number_1 + number_2;
    };
    return Adicao;
}());
var Subtracao = /** @class */ (function () {
    function Subtracao() {
    }
    Subtracao.prototype.executar = function (number_1, number_2) {
        return number_1 - number_2;
    };
    return Subtracao;
}());
var Multiplicacao = /** @class */ (function () {
    function Multiplicacao() {
    }
    Multiplicacao.prototype.executar = function (number_1, number_2) {
        return number_1 * number_2;
    };
    return Multiplicacao;
}());
var Divisao = /** @class */ (function () {
    function Divisao() {
    }
    Divisao.prototype.executar = function (number_1, number_2) {
        if (number_2 === 0) {
            throw new Error('Não é possivel dividir por 0');
        }
        return number_1 / number_2;
    };
    return Divisao;
}());
var Exponenciacao = /** @class */ (function () {
    function Exponenciacao() {
    }
    Exponenciacao.prototype.executar = function (number_1, number_2) {
        return Math.pow(number_1, number_2);
    };
    return Exponenciacao;
}());
var Radiciacao = /** @class */ (function () {
    function Radiciacao() {
    }
    Radiciacao.prototype.executar = function (number_1, number_2) {
        return Math.pow(number_1, (1 / number_2));
    };
    return Radiciacao;
}());
var Calculadora = /** @class */ (function () {
    function Calculadora(number_1, number_2) {
        this.number_1 = number_1;
        this.number_2 = number_2;
    }
    Calculadora.prototype.calcular = function (operacaoes) {
        var resultados = [];
        for (var _i = 0, operacaoes_1 = operacaoes; _i < operacaoes_1.length; _i++) {
            var operacao = operacaoes_1[_i];
            var resultado = operacao.executar(this.number_1, this.number_2);
            resultados.push(resultado);
        }
        return resultados;
    };
    return Calculadora;
}());
var calculadora = new Calculadora(5, 3);
var operacoes = [new Adicao(), new Subtracao(), new Multiplicacao(), new Divisao(), new Exponenciacao(), new Radiciacao()];
var resultados = calculadora.calcular(operacoes);
console.log(resultados);
