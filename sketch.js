var sea,boat,eel,coins,ruby,jewelry,cash
var seaImg,boatImg,eelImg,coinsImg,rubyImg,jewelryImg,cashImg
var treasureCollection = 0;
var coinsG,rubyG,jewelryG,cashG

var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
seaImg = loadImage("sea.jpg");
boatImg = loadImage("boat.jpg");
eelImg = loadImage("eel.jpg");
coinsImg = loadImage("gold coin.png");
rubyImg = loadImage("ruby.png");
jewelryImg = loadImage("jewelry.png");
cashImg = loadImage("cash.png");
endImg = loadImage("game over.jpg");


}

function setup() {
 
 createCanvas(800,800);

sea = createSprite(0,0);
sea.scale = 0.5;
sea.addImage(seaImg);
sea.velocityY = 4;

boat = createSprite(width/2,height-20,20,20);
boat.addAnimation("ManRowing",boatImg);
boat.scale=0.08;

coinsG=new Group();
rubyG=new Group();
jewelryG=new Group();
cashG=new Group();
eelG=new Group();
}

function draw() {

if(gameState===PLAY){
 background(0);   
boat.x = World.mouseX;

edges = createEdgeSprites();
boat.collide(edges);

if (sea.y > 800 ) {
    sea.y = 400;
}

createCoins();
createRuby();
createJewelry();
createCash();
createEel();


if (coinsG.isTouching(boat)) {
    coinsG.destroyEach();
    treasureCollection=treasureCollection + 100;
}
else if (rubyG.isTouching(boat)) {
    rubyG.destroyEach();
    treasureCollection=treasureCollection + 150;
}
else if (jewelryG.isTouching(boat)) {
    jewelryG.destroyEach();
    treasureCollection=treasureCollection + 100;
}
else if (cashG.isTouching(boat)) {
    cashG.destroyEach();
    treasureCollection=treasureCollection + 200;
} 
else if (eelG.isTouching(boat)) {
    gameState=END}
    


        boat.addAnimation("ManRowing",endImg);
        boat.x=width/2;
        boat.y=height/2;
        boat.scale=0.6;

        coinsG.destroyEach();
        rubyG.destroyEach();
        jewelryG.destroyEach();
        cashG.destroyEach();
        eelG.destroyEach();

        coinsG.setVelocityYEach(0);
        rubyG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        cashG.setVelocityYEach(0);
        eelG.setVelocityYEach(0);
        
}
}

 
 textSize(20);
 Fill(255);
 text("Treasure:"+ treasureCollection,width-150,30);
 drawSprites();
                                                                                           
  



 

 function createCoins() {
    if (World.frameCount % 200 == 0) {
    var coins = createSprite(Math.round(random(50, width-50),40, 10, 10));
    coins.addImage(coinsImg);
    coins.scale=0.12;
    coins.velocityY = 5;
    coins.lifetime = 200;
    coinsG.add(coins);
    }
  }

  function createRuby() {
    if (World.frameCount % 320 == 0) {
    var ruby = createSprite(Math.round(random(50, width-50),40, 10, 10));
    ruby.addImage(rubyImg);
    ruby.scale=0.03;
    ruby.velocityY = 5;
    ruby.lifetime = 200;
    rubyG.add(ruby);
  }
  }

  function createJewelry() {
    if (World.frameCount % 410 == 0) {
    var jewelry = createSprite(Math.round(random(50, width-50),40, 10, 10));
    jewelry.addImage(jewelryImg);
    jewelry.scale=0.13;
    jewelry.velocityY = 5;
    jewelry.lifetime = 200;
    jewelryG.add(jewelry);
    }
  }

  function createCash() {
    if (World.frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
    cash.addImage(cashImg);
    cash.scale=0.12;
    cash.velocityY = 5;
    cash.lifetime = 200;
    cashG.add(cash);
    }
  }

  function createEel(){
    if (World.frameCount % 530 == 0) {
    var eel = createSprite(Math.round(random(50, width-50),40, 10, 10));
    eel.addImage(eelImg);
    eel.scale=0.1;
    eel.velocityY = 4;
    eel.lifetime = 200;
    eelGroup.add(eel);
    }
}