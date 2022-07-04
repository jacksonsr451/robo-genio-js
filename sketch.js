let background_img;
let robo;
let balao;

let numero_da_pergunta = 0;

let caixa_de_respostas;

function preload() {
  background_img = loadImage("img/background.png");
  robo = loadImage("img/robo.png");
  balao = loadImage("img/balao.png")
}

function setup() {
  createCanvas(600, 400);

  caixa_de_respostas = createInput();
}

function draw() {
  background(background_img);
  image(robo, 220, 200, 150, 150);
  iniciarPerguntas();
}

function mousePressed() {
  if (numero_da_pergunta <= 0) {
    numero_da_pergunta += 1;
  }
}

function iniciarPerguntas() {
  switch (numero_da_pergunta) {
    case 1:
      desenharBalao(30, "Qual o seu livro \n favorito?", 285, 70);
      exibirCaixaDeRespostas();
      break;
  
    default:
      desenharBalao(
        15,
        "Seja bem vindo ao Alura Gênios! \n" +
        "Para adivinhar o seu nome, responda \n" +
        "minhas perguntas com frazes \n" +
        "longas. \n" +
        "Clique na tela para começar!", 290, 50
      )
      break;
  }
}

function exibirCaixaDeRespostas() {
  caixa_de_respostas.possition(85, 360);
  caixa_de_respostas.size(450, 20)
}

function desenharBalao(fontSize, testoParaBalao, posX, posY) {
  image(balao, 120, 10, 350, 200)
  textSize(fontSize);
  textAlign(CENTER);
  textStyle(BOLD);
  text( testoParaBalao, posX, posY)
}