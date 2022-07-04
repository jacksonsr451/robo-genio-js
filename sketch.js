let background_img;
let robo;
let balao;

let numero_da_pergunta = 0;

let caixa_de_respostas;

let nome = "";

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

    case 2:
      desenharBalao(30, "Qual o seu filme \n favorito?", 285, 70);
      exibirCaixaDeRespostas();
      break;

    case 3:
      desenharBalao(30, "Qual o sua fruta \n favorito?", 285, 70);
      exibirCaixaDeRespostas();
      break;

    case 4:
      desenharBalao(30, "Qual o sua cor \n favorito?", 285, 70);
      exibirCaixaDeRespostas();
      break;

    case 5:
      desenharBalao(30, "O seu nome é!\n" + nome, 285, 70);
      final();
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
  caixa_de_respostas.position(85, 360);
  caixa_de_respostas.size(450, 20);
  caixa_de_respostas.elt.placeholder = "Responda aqui, e pressione a tecla ENTER";
}

function desenharBalao(fontSize, testoParaBalao, posX, posY) {
  image(balao, 120, 10, 350, 200)
  textSize(fontSize);
  textAlign(CENTER);
  textStyle(BOLD);
  text( testoParaBalao, posX, posY)
}

function keyPressed() {
  if (keyCode === ENTER) {
    if ( validar_resposta() ) {
      descobrirNome();
    }
  }
}

function validar_resposta() {
  return !caixa_de_respostas.value() == "";
}

function descobrirNome() {
  let resposta = caixa_de_respostas.value();
  if (temPontoFinal(resposta)) {
    nome = nome +  resposta[0];
  }
  caixa_de_respostas.value("");
  numero_da_pergunta ++;
}

function final() {
  caixa_de_respostas.remove()
}

function temPontoFinal(resposta) {
  return resposta.includes(".");
}