var x = 0;
var y = 0;
var w = 30;
var p = 0.5;

function setup() {
	createCanvas(600, 600);
	background(0)
	stroke(255);
	strokeWeight(2);
}

function draw() {
	if (random(0, 1) > p)
		line(x, y, x + w, y + w);
	else
		line(x, y + w, x + w, y);

	x += w;
	if (x >= width) {
		x = 0;
		y = y + w;
		if (y >= width) {
			background(0);
			y = 0;
			w = Math.floor(random(20, 30));
			p = random(0.3, 0.7)
			print(w, p)
		}
	}
}