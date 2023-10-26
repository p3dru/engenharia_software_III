var RedeSocial = /** @class */ (function () {
    function RedeSocial() {
    }
    RedeSocial.prototype.postarMensagem = function (mensagem) {
        if (mensagem === '' || mensagem === null) {
            throw new Error('A mensagem não pode ser vazia');
        }
        return 'mensagem postada: ' + mensagem;
    };
    return RedeSocial;
}());
var mensagem = new RedeSocial();
console.log(mensagem.postarMensagem(''));
//mensagem.postarMensagem('vsdv')
