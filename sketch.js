var rectangle1, rectangle2
var rect1, rect2;
function setup() {
  createCanvas(800,400);
 movingrect = createSprite(400, 200, 50, 50);
 
 fixedrect = createSprite(300, 100, 50, 50);

 rect1 = createSprite(400,350,50,50);
 rect1.velocityX = -2;

 rect2 = createSprite(200,350,50,60);
 rect2.velocityX = 2;
}

function draw() {
 movingrect.x = mouseX;
 movingrect.y = mouseY;
  background(0);

  bounceoff(rect1,rect2);
  
  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  } else {
    movingrect.shapeColor = "grey";
    fixedrect.shapeColor = "grey";
  }


  drawSprites();

 }

