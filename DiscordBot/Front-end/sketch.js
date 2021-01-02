var bgcolor = "red";

function setup() {
	createCanvas(200, 200);
	
}

function draw() {

	ellipse(10,10,20)

	switch (bgcolor) {
		case "red":
			background('rgb(200,0,0');
			break;
		
		case "blue":
			background('rgb(46,88,148)');
			break;

		case "yellow":
			background('rgb(252,194,0)')
	}
}