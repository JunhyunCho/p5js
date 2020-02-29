var sun

function setup() {
	createCanvas(800, 800);
	background(0);
	noStroke();
	stroke(255);
	fill(255)
	sun = new Planet(50, 0, 0, 0);
	//sun.spawnMoon(5, 2)
}

function draw() {
	background(0)
	sun.orbit();
	sun.show();
}

class Planet {
	constructor(radius, distance, speed, startAngle) {
		this.radius = radius;
		this.distance = distance;
		this.speed = speed;
		this.startAngle = startAngle;
	}

	orbit() {
		this.angle += this.speed;
	}

	show() {
		ellipse(0, 0, this.radius, this.radius);
	}


}