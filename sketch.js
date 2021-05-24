var fixedRect, movingRect;
var car, wall
var arrow, balloon;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,400,50,50);
  car.shapeColor = "orange";

  wall = createSprite(300,500,50,50);
  wall.shapeColor = "green";

  arrow = createSprite(400,600,50,50);
  arrow.shapeColor = "red";

  balloon = createSprite(500,700,50,50);
  balloon.shapeColor = "green";
}



function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 car.x = World.mouseX;
 car.y = World.mouseY;

 balloon.x = World.mouseX;
balloon.y = World.mouseY;

  //istouching(car,wall)
  //istouching(movingRect,fixedRect)

  if(istouching(car,wall)){
    textSize(20)
   text("hellp",200,200)
   background("yellow")
  }
  else{
    console.log("DIdn't touched")
    background("red")
  }

  if(istouching(arrow,balloon)) {
    background("pink");
  }

  else{
    background("orange");
  }

  drawSprites();
}



function istouching(object1,object2){
if (object1.x -  object2.x <  object2.width/2 + object1.width/2
    &&  object2.x - object1.x <  object2.width/2 + object1.width/2
    && object1.y -  object2.y <  object2.height/2 + object1.height/2
    &&  object2.y - object1.y <  object2.height/2 + object1.height/2) {
      return true
   }
else {
  return false
}
}