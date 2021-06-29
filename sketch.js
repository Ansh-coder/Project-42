function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(400,200);
  hr = hour();
mn = minute();
sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(250,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(250,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(250,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}