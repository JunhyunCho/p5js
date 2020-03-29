var boxWidth = 10;
var boxHeight = 10

function setup() {
	createCanvas(600, 400);
	background(255)
	noStroke();
	colorMode(HSB);
}

function draw() {

	background(255);
	boxWidth = mouseX + 1; //= map(mouseX, 0, 600, 1, 600)
	boxHeight = mouseY + 1; //map(mouseY, 0, height, 1, height)print(mouseX, boxWidth)
	//boxHeight = mouseY;

	for (let i = 0; i < height / boxHeight; i++) {
		for (let j = 0; j < width / boxWidth; j++) {
			s			fill(boxWidth / width * 360 * (j + 1), boxHeight / height * 100 * (i + 1), 100)
			rect(j * boxWidth, i * boxHeight, boxWidth, boxHeight)
		}
	}
}
