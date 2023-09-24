package q_7;

public class UsuarioAltoAcoplamento {
    private String nome;
    private String email;

    public UsuarioAltoAcoplamento(String nome, String email){
        this.email = email;
        this.nome = nome;
    }

    public void enviarEmail(String mensagem){
        //lógica de mandar e-mail diretamente inserida como método de usuário
    }
}
