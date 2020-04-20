var canvas;
var alturaMin;
var alturaMax;


function setup() {
    canvas = createCanvas(800, 800);
    canvas.position(550, 100);
    
    alturaMin = 10;
    alturaMax = 800;
}

function draw() {
    background(0);
    
    var altura = map(mouseY, 0, height, alturaMin, alturaMax);
    var transparencia = map(mouseY, 0, height, 0, 255);

    fill(250, 205, 25, transparencia);
    rect(300,0, 200, altura);

}