function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,360);
  background(0);
  frameRate(25);
}

function draw() {
  noStroke();
  for(let i = 0; i < 15; i++){
    fill(random(0,360),180,360);
    circle(random(0,width),random(0,height),random(0.5,50));
  }
  if(frameCount % 300 == 0){
    background(0);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
