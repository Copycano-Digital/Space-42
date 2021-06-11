var ISSimg;
var SpaceBGimg;
var Spacecraft1Img;
var Spacecraft2Img;
var Spacecraft3Img;
var Spacecraft4Img;

var ISS;
var spacecraft;
//var spacebackground;
var hasDocked = false;

function preload(){
  ISSimg = loadImage("iss.png");
  SpaceBGimg = loadImage("spacebg.jpg");
  Spacecraft1Img = loadImage("spacecraft1.png");
  Spacecraft2Img = loadImage("spacecraft2.png");
  Spacecraft3Img = loadImage("spacecraft3.png");
  Spacecraft4Img = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  createSprite(400, 200, 50, 50);
  ISS = createSprite(400, 200, 50, 50);
  ISS.addImage(ISSimg);
  spacecraft = createSprite(850, 650, 10, 10);
  spacecraft.scale = 0.2;
  spacecraft.addImage(Spacecraft1Img);
  
  if(!hasDocked){
    spacecraft.x = random(1, 950);
  }

  spacecraft.debug = true;
  ISS.debug = true;
  
}

function draw() {
  background(SpaceBGimg);  

  

  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(Spacecraft3Img);
    spacecraft.velocity.x = -1;
  }

  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(Spacecraft4Img);
    spacecraft.velocity.x = 1;
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(Spacecraft2Img);
  }

  if(keyDown(UP_ARROW)){
    spacecraft.addImage(Spacecraft1Img);
    spacecraft.velocity.y = -1;
  }

  if((spacecraft.x = 400) && (spacecraft.y = 200)){
    hasDocked = true
    text("Docking Successful!", 800, 400);
    spacecraft.velocity.x = 0;
    spacecraft.velocity.y = 0;
  }

  drawSprites();
}