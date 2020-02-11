var rains = [];
var speed = 20;

function setup() {
	createCanvas(800, 600);
	background(255);
	//noStroke();
	stroke(255);
	fill(255)
	for (let i = 0; i < 200; i++) {
		rains[i] = new Rain(800, 800)
	}
}

function draw() {
	background(255);
	for (let i = 0; i < rains.length; i++) {
		rains[i].move();
		rains[i].render();
	}
}

function Rain(screenW, screenH) {

	this.x = random(0, screenW);
	this.y = random(-screenW, 0);
	this.distance = random(1, 10);

	this.resetRain = function () {
		this.x = random(0, screenW);
		this.y = random(-screenW, 0);
		this.distance = random(1, 10);
	}

	this.pX = this.x;
	this.pY = this.y;

	this.move = function () {

		this.pX = this.x;
		this.pY = this.y;

		this.y = this.y + speed / this.distance + 5;

		//check outside, then respawn
		if (this.y > screenH + 100) { //| this.r > 20) {
			this.resetRain();
		}
	}

	this.render = function () {
		//fill(255)
		strokeWeight(10 / this.distance)
		stroke(180, 88, 219)
		line(this.x, this.y, this.x, this.y + 100 / this.distance)
	}

}