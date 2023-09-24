/*Essa parte foi com ajuda do chatGPT */

package q_4;

import java.util.ArrayList;

public class StringsUtil {
    private String texto;

    public String removerEspacos(String texto) {
        StringBuilder resultado = new StringBuilder();
        for (int i = 0; i < texto.length(); i++) {
            char caractere = texto.charAt(i);
            if (caractere != ' ') {
                resultado.append(caractere);
            }
        }
        return resultado.toString();
    }
    
    public String[] quebrarEmPalavras(String texto) {
        ArrayList<String> palavras = new ArrayList<>();
        StringBuilder palavraAtual = new StringBuilder();

        for (int i = 0; i < texto.length(); i++) {
            char caractere = texto.charAt(i);
            if (caractere == ' ') {
                if (palavraAtual.length() > 0) {
                    palavras.add(palavraAtual.toString());
                    palavraAtual.setLength(0); // Limpar a palavra atual
                }
            } else {
                palavraAtual.append(caractere);
            }
        }

        if (palavraAtual.length() > 0) {
            palavras.add(palavraAtual.toString());
        }

        return palavras.toArray(new String[0]);
}


    
}
