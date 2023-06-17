// código das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarros;

//sons
let somDatrilha;
let somDaColisao;
let somDoPonto;

function preload() {
    somDatrilha = loadSound("material/sons/trilha.mp3");
    somDaColisao = loadSound("material/sons/colidiu.mp3");
    somDoPonto = loadSound("material/sons/pontos.wav");

    imagemDaEstrada = loadImage("material/estrada.png");
    imagemDoAtor = loadImage("material/ator-1.png");
    imagemCarro = loadImage("material/carro-1.png");
    imagemCarro2 = loadImage("material/carro-2.png");
    imagemCarro3 = loadImage("material/carro-3.png");

    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,
        imagemCarro, imagemCarro2, imagemCarro3];
}