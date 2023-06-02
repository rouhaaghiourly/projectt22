var meteorImg
var rocketImg
var galaxyImg

function preload(){
 meteorImg=loadImage("meteor.jpg")
 rocketImg=loadImage("rocket-icon-rocket.jpg")
 galaxyImg=loadImage("galaxy.png")
}

function setup() {
 createCanvas(600,600);
 galaxy=createSprite(300,300);
 galaxy.addImage("galaxy",galaxyImg);
 galaxy.velocityY = 1;

 rocket = createSprite(200,200,50,50);
 rocket.scale = 0.3;
 rocket.addImage("rocket", rocketImg);

 meteorGroup = new Group();
}

function draw() {
 backgroung(255);
if(galaxy.y >600){
    galaxy.y = 300
}

if (gamestate === "play"){

 if(keyDown(LEFT_ARROW)){
      rocket.x =rocket.x - 3;
 }

if (keyDown("RIGHT_ARROW")){
       rocket.x=rocket.x + 3;
}

if (KeyDown("SPACE")){
       rocket.velocityY = -10;
}
 
rocket.velocityY = rocket.velocityY + 0.8;


spawnMeteor();

 if(meteorGroup.isTouching(rocket)){
  rocket.velocityY=0;
  rocket.destroy()
  gamestate = "end"
 }
 drawSprite();
}
 if(gameState === "end"){
    fill("green");
    textSize(20);
    text("Game Over", 235,300)
 }
}

function spawnMeteor(){
  if(frameCount % 240 ===0){
      var meteor = createSprite(200,30)
      meteorImg.x.math.round(random(75,525))
      meteor.addImage(meteorImg)
      meteor.velocityY=1
      meteor.lifetime=800;
 }
             
}
 



 
