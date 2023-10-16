"use strict";
class CalculadoraImpostoDeRenda {
    calcularImposto(rendimentos, despesas) {
        const rendaTotal = rendimentos.reduce((acc, valor) => acc + valor, 0);
        const despesaTotal = despesas.reduce((acc, valor) => acc + valor, 0);
        const baseCalculo = rendaTotal - despesaTotal;
        if (baseCalculo <= 1903.98) {
            return 0.0;
        }
        if (baseCalculo <= 2826.65) {
            return baseCalculo * 0.075 - 142.80;
        }
        // E assim por diante, para outros intervalos...
        return baseCalculo * 0.275 - 869.36; // Para bc acima de 4664.68
    }
}
class ImpostoDeRenda {
    constructor(cpfContribuinte, rendimentos, despesas) {
        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }
    processar() {
        const calculadora = new CalculadoraImpostoDeRenda();
        const impostoDevido = calculadora.calcularImposto(this.rendimentos, this.despesas);
        const relatorio = new RelatorioImpostoRenda();
        relatorio.gerarRelatorio(this, impostoDevido);
    }
}
class RelatorioImpostoRenda {
    gerarRelatorio(impostoDeRenda, impostoDevido) {
        console.log("CPF: " + impostoDeRenda.cpfContribuinte);
        console.log("Rendimentos: " + impostoDeRenda.rendimentos);
        console.log("Despesas: " + impostoDeRenda.despesas);
        console.log("Imposto Devido: " + impostoDevido);
    }
}
// Exemplo de uso
const cpf = "123.456.789-00";
const rendimentos = [50000, 10000, 8000];
const despesas = [10000, 5000, 3000];
const declaracao = new ImpostoDeRenda(cpf, rendimentos, despesas);
declaracao.processar();
