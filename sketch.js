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
  image(balao, 120, 10, 350, 200)
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  text("Seja bem vindo ao Alura Gênios! \n" +
      "Para adivinhar o seu nome, responda \n" +
      "minhas perguntas com frazes \n" +
      "longas. \n" +
      "Clique na tela para começar!" 
      , 290, 50)
}

function mousePressed() {
  console.log("Teste de clique");
}