let botaoLigar = document.querySelector('#botaoLigar')


botaoLigar.onclick = function () {
    document.querySelector('#lampadaDesligada').src= "/imagens/lampada_ligada (1).gif"
}

botaoDesligar.onclick = function () {
    document.querySelector('#lampadaDesligada').src= "/imagens/lampada_desligada.gif"
}