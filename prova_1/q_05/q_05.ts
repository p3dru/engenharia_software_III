class SalvarTransacao{
    static salvar(transacao:Transacao){
        console.log("Salvou TXT");
        
    }
}

class CalcularTaxas{
    static calcular(transacao:Transacao){
        switch (transacao.getTipo().toUpperCase()) {
            case "DEPOSITO":
                return transacao.getValor() * 0.01;
            case "RETIRADA":
                return transacao.getValor() * 0.02;
            case "TRANSFERENCIA":
                return transacao.getValor() * 0.015;
            default:
                return 0;
        }
    }
}

class Transacao{
    private valor: number;
    private data: Date;
    private tipo: string;

    constructor(valor: number, data: Date, tipo: string){
        this.valor = valor;
        this.data = data;
        this.tipo = tipo;
    }

    getValor(){
        return this.valor;
    }

    getData(){
        return this.data;
    }

    getTipo(){
        return this.tipo;
    }
}