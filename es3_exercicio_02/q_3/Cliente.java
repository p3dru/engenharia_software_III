package q_3;

public class Cliente{
    private int id;
    private String nome;
    private String endereco;
    private Conta conta;

    public void exibirInformacoes(){
        //exibir informacoes
    };

    public void realizarCompra(Compra compra){
        conta.registrarCompra(compra);
    }
}