var ay;

function preload() {
  ay = loadImage('22.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Hi Melody');
  background(0);
  noStroke();
  ay = loadImage('22.png');

}

function draw() {


  fill(0);
  rect(0, 0, windowWidth, windowHeight - 100);
  noStroke();
  fill(255);

  x = constrain(mouseX, 100, windowWidth - 100)
  y = constrain(mouseY, 100, windowHeight - 150)

  fill(0);
  stroke(0);


  for (var ey = 0; ey <= height - 100; ey += 100) {
    for (var ex = 0; ex <= width; ex += x) {
      stroke(8, 249, 249);
      strokeWeight(1);
      line(0, ey, x, y);


      line(windowWidth, ey, x, y);

    }
  }

  image(ay, x - 50, y - 50, 100, 100);

  if (mouseIsPressed == true) {
    strokeWeight(30);
    stroke(8, 249, 249);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  textSize(30);
  noStroke();
  fill(0);
  text("A color like that of snow, milk, or bone is said kind of WHITE. Thus, that is not TRUE. Cuz it's always just a white little lies.. . . ,", 10, windowHeight - 100, windowWidth, windowHeight - 10);


  
}
function doubleClicked() {
  fill(0);
  rect(0, windowHeight-100, windowWidth, windowHeight);
}