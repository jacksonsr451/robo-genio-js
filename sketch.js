let background_img;
let robo;
let balao;

function preload() {
  background_img = loadImage("img/background.png");
  robo = loadImage("img/robo.png");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(background_img);
}