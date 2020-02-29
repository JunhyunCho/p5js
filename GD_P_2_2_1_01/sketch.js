var x = 0;
var y = 0;
var w = 30;
var xy_array = [];
var lineWidth0, lineWidth1;


function setup() {
	createCanvas(600, 600);
	background(255)
	stroke(0);
	strokeWeight(2)
	for (var i = 0; i < width / w; i++) {
		xy_array[i] = [];
		for (var j = 0; j < height / w; j++) {
			xy_array[i][j] = Math.floor(random(0, 2));
			//print(i, j, xy_array[i][j]);
		}
	}

	//print(xy_array.length, xy_array[0].length)


}

function draw() {

	lineWidth0 = map(mouseX, 0, width, 2, 30)
	lineWidth1 = map(mouseY, 0, width, 2, 30)

	background(255);
	for (let i = 0; i < xy_array.length; i++) {
		for (let j = 0; j < xy_array[i].length; j++) {
			if (xy_array[i][j] === 1) {
				strokeWeight(lineWidth1)
				line(x, y, x + w, y + w);
			}
			else {
				strokeWeight(lineWidth0)
				line(x, y + w, x + w, y);
			}
			x += w;
			if (x >= width) {
				x = 0;
				y = y + w;
			}
			//print("drawing", i, j)
		}
	}
	y = 0;
}
