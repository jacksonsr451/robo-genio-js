let background_img;
let robo;
let balao;

let numero_da_pergunta = 0;

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
  desenharBalao(
    "Seja bem vindo ao Alura Gênios! \n" +
    "Para adivinhar o seu nome, responda \n" +
    "minhas perguntas com frazes \n" +
    "longas. \n" +
    "Clique na tela para começar!"
  )
}

function mousePressed() {
  iniciarPerguntas();
}

function iniciarPerguntas() {
  if(numero_da_pergunta == 0) {
    
  }
}

function desenharBalao(testoParaBalao) {
  image(balao, 120, 10, 350, 200)
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  text( testoParaBalao, 290, 50)
}