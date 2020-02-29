var x = 0;
var y = 0;
var w = 60;
var xy_array = [];

function setup() {
	createCanvas(600, 600);
	background(255)
	stroke(0);
	strokeWeight(10)
	for (var i = 0; i < width / w; i++) {
		xy_array[i] = [];
		for (var j = 0; j < height / w; j++) {
			xy_array[i][j] = PI * (i - j) / 100
			//print(i, j, xy_array[i][j]);
		}
	}
}

function draw() {

	background(255);
	for (let i = 0; i < xy_array.length; i++) {
		for (let j = 0; j < xy_array[i].length; j++) {
			push();
			let currentX = w * i + w / 2;
			let currentY = w * j + w / 2
			translate(currentX, currentY);
			let angle = atan2(mouseY - currentY, mouseX - currentX) + PI / 2
			rotate(xy_array[i][j] + angle);
			line(0, w / 2, 0, -w / 2);
			pop();
		}
	}
	y = 0;
}
