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
  iniciarPerguntas();
}

function mousePressed() {
  numero_da_pergunta += 1;
}

function iniciarPerguntas() {
  switch (numero_da_pergunta) {
    case 1:
      desenharBalao("Qual o seu livro favorito?")
      break;
  
    default:
      desenharBalao(
        "Seja bem vindo ao Alura Gênios! \n" +
        "Para adivinhar o seu nome, responda \n" +
        "minhas perguntas com frazes \n" +
        "longas. \n" +
        "Clique na tela para começar!"
      )
      break;
  }
}

function desenharBalao(testoParaBalao) {
  image(balao, 120, 10, 350, 200)
  textSize(15);
  textAlign(CENTER);
  textStyle(BOLD);
  text( testoParaBalao, 290, 50)
}