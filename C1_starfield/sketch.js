var stars = [];
var speed = 0.07;

function setup() {
	createCanvas(800, 800);
	background(0);
	//noStroke();
	stroke(255);
	fill(255)
	for (let i = 0; i < 100; i++) {
		stars[i] = new Star(800, 800)
	}
}

function draw() {
	background(0);
	checkSpeed();
	for (let i = 0; i < stars.length; i++) {
		stars[i].move();
		stars[i].render();
	}
}

function checkSpeed() {
	speed = map(mouseX, 0, 800, 0, 0.1)
}

function Star(screenW, screenH) {

	this.x = random(0, screenW);
	this.y = random(0, screenH);
	this.pX = this.x;
	this.pY = this.y;
	this.r = 1;

	this.resetStar = function () {
		this.x = random(0, screenW);
		this.y = random(0, screenH);
		this.pX = this.x;
		this.pY = this.y;
		this.r = 1;
	}


	this.move = function () {

		this.pX = this.x;
		this.pY = this.y;

		let vX = this.x - screenW / 2;
		let vY = this.y - screenH / 2;
		//print(this.x, vX)
		this.x = this.x + vX * speed;
		this.y = this.y + vY * speed;
		this.r = this.r * (1 + speed);


		//check outside, then respawn
		if (this.x > screenW | this.x < 0 | this.y > screenH | this.y < 0) { //| this.r > 20) {
			this.resetStar();
		}
	}

	this.render = function () {
		//fill(255)
		noStroke();
		ellipse(this.x, this.y, this.r);
		stroke(255)
		strokeWeight(this.r)
		line(this.x, this.y, this.pX, this.pY)
	}

}