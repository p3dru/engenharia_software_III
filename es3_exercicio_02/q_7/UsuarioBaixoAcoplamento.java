package q_7;

public interface EmailService{
    //implementa uma lógica de interface para serviços de e-mail sem necessariamente
    //deixar que quem venha acessar seus métodos, tenha 100% de certeza de como é a 
    //lógica de envio. Por isso usaremos o @Override
    void enviarEmail(String email, String mensagem);
};

public class ServicoEmail implements EmailService{
    //aqui o override simplesmente "recria a função" enviarEmail da interface pai
    @Override
    public void enviarEmail(String email, String mensagem){
        //lógica real de envio
    };
};


public class UsuarioBaixoAcoplamento {
    private String nome;
    private String email;
    private EmailService emailService;

    public UsuarioBaixoAcoplamento(String nome, String email, EmailService emailService){
        this.nome = nome;
        this.email = email;
        this.emailService = emailService;
    };

    public void enviarEmail(String mensagem){
    //aqui ele acessa o método enviarEmail de EmailService, porém com a lógica alterada
    //por ServicoEmail, assim, a classe UsuarioBaixoAcoplamento, não tem informações
    //sobre como o método enviarEmail de fato funciona, uma vez que está utilizando a
    //abstração (interface) EmailService.
        emailService.enviarEmail(email, mensagem);
    }
};
