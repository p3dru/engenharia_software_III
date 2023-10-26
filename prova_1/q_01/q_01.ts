class Pedido{
    private valorTotal: number;
    private cliente: Cliente;

    constructor(valorTotal: number, cliente: Cliente){
        this.valorTotal = valorTotal;
        this.cliente = cliente
    }
}



class Cliente{
    private nome: string;
    private pedidos: Pedido[];

    constructor(nome: string, pedidos: Pedido[]){
        this.nome = nome;
        this.pedidos = pedidos;
    }

    adicionarPedido(pedido): Pedido{
        this.pedidos.push(pedido)
        return pedido
    }

}

class ProcessadordePedido{
    static processar(cliente : Cliente){
        const pedido : Pedido= new Pedido(20,cliente)
        cliente.adicionarPedido(pedido)
        return pedido
    }
}