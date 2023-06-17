
function setup() {
    createCanvas(500, 400);
    //somDatrilha.loop();

};

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    reiniciaPosicaoDoCarro();
    verificaColisao();
    mostraPontos();
    marcaPonto();
}









