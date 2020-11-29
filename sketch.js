var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300, 300, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 200, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";


  //movingRect.velocityX = -2;
}

function draw() {
  background("black"); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject3)){
    gameObject3.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    gameObject3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  
  bounceOff(movingRect, gameObject1);
    
  
  drawSprites();
}



