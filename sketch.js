hr = hour()
mn = minute()
sc = seconds()
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  scAngle = map (sc, 0 ,60, 0 ,360)
  
  drawSprites();
}