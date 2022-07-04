let background_img;
let robo;

let background;


function preload() {
  background_img = loadImage("img/background.png");
  robo = loadImage("img/robo.png");
}

function setup() {
  createCanvas(400, 400);

  background_img.loadPixels()
  
}

function draw() {
  background(220);
}