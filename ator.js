// código do ator
let xAtor = 100;
let yAtor = 370;

// colisao

let colisao = false;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        if (podeSeMover()) {
            yAtor += 3;
        }

    }
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i],
            comprimentoCarro, larguraCarro,
            xAtor, yAtor, 15);

        if (colisao) {
            voltaAtorParaPosicaoInicial();
            somDaColisao.play();

            if (meusPontosMaiorQueZero()) {
                pontos--;
            }
        }
    }
}

function voltaAtorParaPosicaoInicial() {
    yAtor = 370;
}

function podeSeMover() {
    return yAtor < 370;
}