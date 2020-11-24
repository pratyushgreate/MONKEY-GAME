var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodsGroup, obstaclesGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  ground = createSprite(400,200,4000,10);
  

 
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.05;
obstaclesGroup=createGroup();
  foodsGroup=createGroup();
}


function draw() {
background(180);
  
    if(keyDown("space")&& monkey.y >= 100) {
      monkey.velocityY = -12;
     
    }
     monkey.velocityY =  monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
        ground.velocityX =-4;
       }
  monkey.collide(ground);
    stone();
  food();
    drawSprites();
}
 
function stone(){
if (frameCount % 100 === 0) {
     obstacle = createSprite(600,600,40,10);
     obstacle.y= Math.round(random(100,200));
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.05;
     obstacle.velocityX = -3;
    
     
    obstacle .lifetime = 334;
    obstaclesGroup.add(obstacle);

    }
}
function food(){
  if (frameCount % 80 === 0) {
    banana = createSprite(600,600,40,10);
    banana.y= Math.round(random(100,200));
     banana.addImage(bananaImage);
     banana.scale = 0.05;
     banana.velocityX = -3;
    
     
    banana.lifetime = 334;
    foodsGroup.add(banana);

}
}



