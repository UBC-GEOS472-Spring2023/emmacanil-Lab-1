var count = 0; //initialize a counter variable

function setup() {
  createCanvas(800, 300);
  textAlign(LEFT, CENTER);
  rectMode(CENTER);
  fill(63, 63, 191);
  frameRate(7);
}

function draw() {
  background(63, 191, 191)

  //declaration of variables
  var x = -180 + count;
  var y = height / 2;
  if (frameCount < 32){
    count = count + frameCount;
  } else {
    count = count;
  }
  
  //rectangle
  fill(255);
  noStroke();
  rect(400, 150, 200,70);
  
  // text
  textSize(60);
  fill(127, 63, 191);
  text('EMMA', x, y);
}