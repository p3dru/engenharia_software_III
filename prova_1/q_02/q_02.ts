class RedeSocial{
    mensagem: string;

    postarMensagem(mensagem:string): string | never {
        if (mensagem === '' || mensagem === null ){
            throw new Error('A mensagem não pode ser vazia');
        }

        return 'mensagem postada: ' + mensagem;
    }
}

const mensagem = new RedeSocial()

console.log(mensagem.postarMensagem(''))
//mensagem.postarMensagem('vsdv')