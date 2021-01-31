function setup() {
	myCanvas = createCanvas(400, 400);
	myCanvas.parent("color_circles");
	background(78); // 0 means black 255 means white , if you call with three , its RGB

}


var spot = {
	x: 100,
	y: 50
}

var col = {
	r: 255,
	g: 0,
	b: 0
}

function draw() { // code inside draw() is automatically looped forever

	spot.x = random(0, width);
	spot.y = random(0, height);

	col.r = random(0, 255);
	col.g = random(0,255);
	col.b = random(0, 255);

	noStroke();
	fill(col.r, col.g, col.b, 100);
	ellipse(spot.x, spot.y, 24, 24);

	textSize(100);
	fill(255);
	// text("Hello", 100, 200,);

}


