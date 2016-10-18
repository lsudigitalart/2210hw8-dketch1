var r, g, b;

function setup() {
  createCanvas(420,140);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(g, b, r);
  for (var x = 35; x < width + 70; x += 70) {
    vampire(x, 110);
  }
}

function vampire(x, y) {
  push();
  translate(x, y);
  stroke(b, r, g);
  strokeWeight(70);
  line(0, -5, 0, -60); //Body
  noStroke();
  fill(215);
  ellipse(0, -65, 70, 70); //Head
  fill(0);
  ellipse(-14, -65, 15, 15); //Left eye
  ellipse(14, -65, 15, 15); //Right eye
  fill(r, g, b);
  ellipse(-14, -65, 5, 5); //Left Pupil
  ellipse(14, -65, 5, 5); //Right Pupil
  fill(0)
  arc(0, -50, 26, -30, 0, 9.4); //Smiley Face
  fill(100);
  ellipse(0, 0, 50, 50); //Clothes
  fill(0);
  ellipse(0, -10, 5, 5); //Top button
  ellipse(0, 0, 5, 5); //Bottom button
  fill(255)
  ellipse(-20, -10, 15, 40); //Left Arm
  ellipse(20, -10, 15, 40); //Right Arm
  triangle(10, -50, 7, -45, 5, -50); //Right Tooth
  triangle(-10, -50, -7, -45, -5, -50); //Left Tooth
  fill(g, r, b);
  ellipse(0, -25, 10); //Bow
  arc(-11, -27, 20, -15, 0, 0); //Left Ribbon
  arc(11, -27, 20, -15, 0, 0); //Right Ribbon
  fill(0);
  arc(0, -74, 68, -65, PI, 0) //Hair
  pop();
}

function mousePressed() {
r = random(0, 255);
g = random(0, 255);
b = random(0, 255);
}
