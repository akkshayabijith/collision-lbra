var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(100,100,50,30);
  rect1.shapeColor = "blue";

  rect2 = createSprite(200,100,30,50);
  rect2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
if(isTouching(movingRect,rect2)){
  movingRect.shapeColor = "orange";
  rect2.shapeColor = "orange";
}else{
  movingRect.shapeColor = "green";
  rect2.shapeColor = "green";
}
if(isTouching(movingRect,rect1)){
  movingRect.shapeColor = "yellow";
  rect1.shapeColor = "yellow";
}else{
  movingRect.shapeColor = "green";
  rect1.shapeColor = "green";
}
//rect1.debug = true;



  drawSprites();
}

