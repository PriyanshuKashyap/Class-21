var fixedRect, movingRect, box1, box2, box3, box4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(30, 400, 50, 50);
  box2 = createSprite(1170, 400, 50, 50);
  box3 = createSprite(600, 30, 50, 50);
  box4 = createSprite(600, 770, 50, 50);

  box1.shapeColor = "blue";
  box2.shapeColor = "red";
  box3.shapeColor = "blue";
  box4.shapeColor = "grey";

  box1.velocityX = 5;
  box2.velocityX = -3;
  box3.velocityY = 6;
  box4.velocityY = -6;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(box1, box2);
  bounceOff(movingRect, fixedRect);
  if (isTouching(box3, box4)) {
    box3.shapeColor = "yellow";
    box4.shapeColor = "yellow";
  } else {
    box3.shapeColor = "blue";
    box4.shapeColor = "gray";
  }
  //console.log(isTouching(box3, box4));
  drawSprites();
}

