/*O princípio Tell Don't Ask mitiga o acoplamento justamente pelo fato dele delegar funções à métodos
 e esses métodos podem chamar outros métodos de outras classes ou interfaces para realizar a função
 solicitada, tirando o "peso" de implementação da sua própria classe e assim apenas mandar outras
 fazerem.
*/

package q_8;

public class Carro {
    private int velocidadeAtual;
    private int velocidadeMaxima;

    // Construtor da classe Carro
    public Carro(int velocidadeMaxima) {
        this.velocidadeMaxima = velocidadeMaxima;
    }

    // Método para acelerar o carro
    public void acelerarPara(int velocidade) throws VelocidadeSuperiorException {
        if (velocidade > velocidadeMaxima) {
            throw new VelocidadeSuperiorException("Velocidade superior à velocidade máxima!");
        }
        velocidadeAtual = velocidade;
    }

    // Outros membros da classe

    public static void main(String[] args) {
        Carro carro = new Carro(200); // Defina a velocidade máxima desejada
        try {
            carro.acelerarPara(150);
        } catch (VelocidadeSuperiorException e) {
            System.err.println(e.getMessage());
        }
    }
}

// Exceção personalizada para velocidade superior à velocidade máxima
class VelocidadeSuperiorException extends Exception {
    public VelocidadeSuperiorException(String message) {
        super(message);
    }
}
