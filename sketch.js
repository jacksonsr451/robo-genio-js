let background_img;
let robo;
let balao;

function preload() {
  background_img = loadImage("img/background.png");
  robo = loadImage("img/robo.png");
  balao = loadImage("img/balao.png")
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(background_img);
  image(robo, 220, 200, 150, 150);
  image(balao, 140, 10, 300, 200)
  textSize(15);
  text("Seja bem vindo ao Alura Gênios!" +
      "Para adivinhar o seu nome, responda \n" +
      "minhas perguntas com frazes \n" +
      "longas. \n" +
      "Clique na tela para começar!" 
      , 180, 50)
}