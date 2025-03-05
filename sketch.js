let bgImage;

function preload() {
  bgImage = loadImage("https://mildfriend.github.io/sundial/assets/computation.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

let lightX = 0;
let lightY = 0;

function draw() {
  background(1, 6, 64); 
  let centerX = width / 2;
  let centerY = height / 2;

  imageMode(CENTER); 
  image(bgImage,centerX, centerY);

  fill(255); 
  textSize(24); 
  textAlign(CENTER, TOP); 
  text("move your time with mouse curser", width / 2, 20);

  lightX = lerp(lightX, mouseX, 0.1);
  lightY = lerp(lightY, mouseY, 0.1);

  noStroke();
  for (let i = 80; i > 0; i -= 10) {
    fill(255, 255, 100, i * 2);
    ellipse(lightX, lightY, i * 3, i * 3);
  }

  fill(255, 204, 0);
  ellipse(lightX, lightY, 50, 50);

  fill(255, 100, 28);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}
 
