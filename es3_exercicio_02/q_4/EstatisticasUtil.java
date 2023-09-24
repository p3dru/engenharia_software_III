package q_4;

public class EstatisticasUtil {
    private double[] numeros;

    public EstatisticasUtil(double[] numeros){
        this.numeros = numeros;
    }

    public double calcularMedia(){
        double soma = 0.0;
        
        for (double numero : numeros){
            soma += numero;
        };

        return soma / numeros.length;
    }

    public double calcularDesvioPadrao(){
        double media = calcularMedia();
        double somaDiferencasQuadradas = 0.0;
        
        for(double numero: numeros){
            double diferenca = numero - media;
            somaDiferencasQuadradas += calcularQuadrado(diferenca);
        };

        double variancia = somaDiferencasQuadradas / numeros.length;

        return Math.sqrt(variancia);
    }

    public double calcularQuadrado(double numero){
        return numero * numero;
    }
}
