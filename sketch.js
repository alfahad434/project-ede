var RunnerImg,pathImg,path,energyDrink,Runner,left_boundary,right_boundary,subway,subwayImg,coin,coinImg;
function preload(){
  //pre-load images
  boyImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png");
  powerImg=loadImage("power.png");
  coinImg=loadImage("coin.png");
  bombImg=loadImage("bomb.png");
  energyDrinkImg=loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;

  boy =createSprite(180,330,50,170);
  boy.scale =  0.08;
  boy.addAnimation("jakeRunning", boyImg);

 bomb = createSprite(100,140 ,10,10);
 bomb.addImage(bombImg);
bomb.scale = 0.08;
bomb.velocityY=1;

energyDrink = createSprite(280,100,10,10);
energyDrink.addImage(energyDrinkImg);
energyDrink.scale = 0.08;
energyDrink.velocityY=2;

  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  coin.velocityY=3;



  left_boundary=createSprite(0,300,100,400);
  right_boundary=createSprite(390,300,80,400);
 left_boundary.visible=false;
right_boundary.visible=false;

}

function draw() {
  background(0);

  path.velocityY=5;

  boy.x=World.mouseX;

  if(path.y>400) {
  path.y=height/2 ;
}
boy.collide(left_boundary);
boy.collide(right_boundary);
edges=createEdgeSprites();
boy.collide(edges[3]);


if(boy.isTouching(coin)){
coin.destroy();
}

if(boy.isTouching(bomb)){
bomb.destroy();

power=createSprite(200,70,100,100);
power.addImage(powerImg);
power.scale=0.2;
power.velocityY=3;

}

if(boy.isTouching(energyDrink)){
energyDrink.destroy();
}



drawSprites();
}