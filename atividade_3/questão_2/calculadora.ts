export interface Operacao {
    executar(number_1: number, number_2: number): number
}


export class Adicao implements Operacao{
    executar(number_1: number, number_2: number): number{
        return number_1 + number_2;
    }
}

export class Subtracao implements Operacao{
    executar(number_1: number, number_2: number): number{
        return number_1 - number_2;
    }
}

export class Multiplicacao implements Operacao{
    executar(number_1: number, number_2: number): number {
        return number_1 * number_2;
    }
}

export class Divisao implements Operacao{
    executar(number_1: number, number_2: number): number {
        if (number_2 === 0){
            throw new Error('Não é possivel dividir por 0');
        }

        return number_1 / number_2;
    }
}

export class Exponenciacao implements Operacao{
    executar(number_1: number, number_2: number): number {
        return number_1 ** number_2;
    }
}

export class Radiciacao implements Operacao{

    executar(number_1: number, number_2: number): number {
        return number_1 ** (1/number_2);
    }
}

export class Calculadora {
    private readonly number_1: number;
    private readonly number_2: number;

    constructor(number_1: number, number_2: number){
        this.number_1 = number_1;
        this.number_2 = number_2;
    }

    calcular(operacaoes: Operacao[]): number[]{
        const resultados: number[] = [];

        for (const operacao of operacaoes){
            const resultado = operacao.executar(this.number_1, this.number_2);
            resultados.push(resultado);
        }

        return resultados;
    }
}

const calculadora = new Calculadora(5, 3);
const operacoes: Operacao[] = [new Adicao(), new Subtracao(), new Multiplicacao(), new Divisao(), new Exponenciacao(), new Radiciacao()];

const resultados = calculadora.calcular(operacoes);
console.log(resultados);