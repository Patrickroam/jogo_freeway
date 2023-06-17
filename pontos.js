
let pontos = 0;
let xPonto = 110;
let yPonto = 25;

function mostraPontos() {
    textStyle(BOLD);
    fill(255, 221, 0);
    textSize(20);
    text(pontos, xPonto, yPonto);
}

function marcaPonto() {
    if (yAtor < yPonto) {
        pontos++;
        voltaAtorParaPosicaoInicial()
        somDoPonto.play();
    }
}

function meusPontosMaiorQueZero() {
    return pontos > 0;
}

