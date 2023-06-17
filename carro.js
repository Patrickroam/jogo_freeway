// código do carro

let velocidadeCarros = [4.2, 3.7, 5, 5.3, 3.5, 2.9];
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 265, 320];
let comprimentoCarro = 50;
let larguraCarro = 40;

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarros[i], yCarros[i],
            comprimentoCarro, larguraCarro);
    }
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function reiniciaPosicaoDoCarro() {

    for (let i = 0; i < imagemCarros.length; i++) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = 600
        }
    }
}

function passouTodaTela(xCarros) {
    return xCarros < -50;
}