let ground;
let lander;
var lander_img;
var bg_img;
var coisodeaumenta, coisodeaumenta_img;
var autoclick, autoclick_img, custo = 1000, quantdeajd, quant;
var asteroid, asteroid_img;
var predas = 0;
var click = 1, preçodoclick = 300;
var som, som2;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  asteroid_img = loadImage("asteroid.png");
  coisodeaumenta_img = loadImage("upgrade.png");
  som = loadSound("click.mp3");  
  som2 = loadSound("cashing.mp3");
  autoclick_img = loadImage("upgrade2.png");
}

function setup() {
  createCanvas(1450,765);
  frameRate(80);
  
  coisodeaumenta = createSprite(1340, 170 , 10, 10);
  coisodeaumenta.addImage(coisodeaumenta_img);
  coisodeaumenta.scale = 0.65;
  
  autoclick = createSprite(1340, 300, 10, 10);
  autoclick.addImage(autoclick_img);
  autoclick.scale = 0.65

  lander = createSprite(430, 290, 30,30);
  lander.addImage(lander_img);
  lander.scale = 0.2;
  

  asteroid = createSprite(440, 420, 60, 60);
  asteroid.addImage(asteroid_img);
  asteroid.scale = 0.5;
  
  
  

  rectMode(CENTER);
  textSize(30);
}


function draw() 
{
  background(51);
  image(bg_img,0,0);

  text("Pedras: ", 40, 110);
  fill("white");

  text(predas, 145, 112);

  textSize(20);
  text("Click 2x: " + preçodoclick, 1250, 120);
  text("Click ajudants: " + custo, 1250, 250);

  lander.depth = asteroid.depth;
  asteroid.depth = asteroid.depth - 1;

  if(mousePressedOver(asteroid) && frameCount % 6 === 0){
    predas += click;
    som.setVolume(0.3)
    som.play();
  }

  if(mousePressedOver(asteroid)){
    asteroid.scale = 0.45
  }
  else{
    asteroid.scale = 0.5
  }

  if(mousePressedOver(coisodeaumenta) && predas >= preçodoclick){
    click += click;
    predas -= preçodoclick;
    preçodoclick += 150
    som2.play;
  }

  if(mousePressedOver(autoclick) && predas >= custo){
    quantdeajd += 1;
    quant += 1
    predas -= 1000;
    custo += 250;
    som2.play;
  }
  
  drawSprites();
}







