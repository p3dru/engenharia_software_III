package q_4;

import java.util.*;

public class OrdenacaoUtil {
    private int[] numeros;

    public void ordenar(int[] numeros){
        Arrays.sort(numeros);
    }

    public void embaralhar(int[] numeros){
        List<int[]> list = Arrays.asList(numeros);

        Collections.shuffle(list);
    }
}
