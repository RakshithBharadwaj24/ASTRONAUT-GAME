var backgroundSprite;
var asteroidGrp;
var gameState = "PLAY";
var score;
var mars,marsImg;
var jupiter,jupiterImg;
var saturn,saturnImg;
var uranus,uranusImg;
var neptune,neptuneImg;
var pluto,plutoImg;
 

function preload(){
  backgroundImg = loadImage("images/galaxy-2643089_1920.jpg");
  samImg = loadImage("images/spaceman-158537_640.png");
  
  asteroid1 = loadImage("images/A1.png");
  asteroid2 = loadImage("images/A2.png");
  asteroid3 = loadImage("images/A-3.png");
  asteroid4 = loadImage("images/A4.png");
  
  marsImg = loadImage("images/mars-153566_640.png");
  jupiterImg = loadImage("images/jupiter-153563_640.png");
  saturnImg = loadImage("images/saturn-148300_640.png");
  uranusImg = loadImage("images/uranus-153572_640.png");
  neptuneImg = loadImage("images/neptune-153571_640.png");
  plutoImg = loadImage("images/pluto-1.png");
}

function setup() {
  createCanvas(1200,600);

  
  backgroundSprite = createSprite(400, 200, 1200, 600);
  backgroundSprite.addImage(backgroundImg);
  backgroundSprite.y = backgroundSprite.height/2;
  backgroundSprite.velocityY = 5;

  sam = createSprite(600,470,100,100);
  sam.addImage(samImg);
  sam.scale = 0.3;

  asteroidGrp = new Group();
  
  score = 0;

  mars = createSprite(200,200,30,30);
  mars.addImage(marsImg);
  mars.scale = 0.4;

  jupiter = createSprite(200,200,30,30);
  jupiter.addImage(jupiterImg);
  jupiter.scale = 0.4;

  saturn = createSprite(200,200,30,30);
  saturn.addImage(saturnImg);
  saturn.scale = 0.6;

  uranus = createSprite(200,200,30,30);
  uranus.addImage(uranusImg);
  uranus.scale = 0.4;

  neptune = createSprite(200,200,30,30);
  neptune.addImage(neptuneImg);
  neptune.scale = 0.4;

  pluto = createSprite(200,200,30,30);
  pluto.addImage(plutoImg);
  pluto.scale = 0.7;
  
}



function draw() {
  background("black");  
  
  

  if(gameState === "PLAY"){
    console.log(getFrameRate());


    score += Math.round(getFrameRate()/60);

    mars.visible = false;
    jupiter.visible = false;
    saturn.visible = false;
    uranus.visible = false;
    neptune.visible = false;
    pluto.visible = false;

    if(score > 200 && score < 300){
      mars.visible = true;
    }
    if(score > 400 && score < 500){
      jupiter.visible = true;
    }
    if(score > 600 && score < 700){
      saturn.visible = true;
    }
    if(score > 800 && score < 900){
      uranus.visible = true;
    }
    if(score > 1000 && score < 1100){
      neptune.visible = true;
    }
    if(score > 1300 && score < 1400){
      pluto.visible = true;
    }
    

    
    backgroundSprite.velocityY = 5;
    if(backgroundSprite.y > 600){
      backgroundSprite.y = 300;     
    }
  
    
    if(keyDown("LEFT_ARROW")){
      sam.x -= 5;
    }
    if(keyDown("RIGHT_ARROW")){
      sam.x += 5;
    }
    if(asteroidGrp.isTouching(sam)){
      gameState = "END";     
    }
  
  }


  else if(gameState === "END"){
    backgroundSprite.velocityY = 0;
    asteroidGrp.setVelocityYEach(0);
    score = 0;
  }

  spawnAsteroids();


  drawSprites();
  
  fill("yellow");
  stroke("red");
  strokeWeight(20);
  textSize(15);
  text("SCORE:  " + score,1100,50);
  
}

function spawnAsteroids(){
  
  if(frameCount % 100 === 0){
    asteroid = createSprite(0,0,50,50);
    asteroid.x = Math.round( Math.random(100,1100) * 1000 );
    asteroid.velocityY = 6;
    asteroid.lifeTime = 100;

    var random = Math.round( Math.random(1,4) * 1 );
    console.log(random);
    if(random === 1){
      asteroid.addImage(asteroid1);
      asteroid.scale = 0.3;
    }
    else{
      asteroid.addImage(asteroid2);
      asteroid.scale = 0.1;
    }
    
    asteroidGrp.add(asteroid);
  } 

}
