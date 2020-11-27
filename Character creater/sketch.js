state = "start"

let rButton 
let sButton

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	rButton = createButton('"What should my race be?"');
	rButton.position(500, 0);
	rButton.mousePressed(race);

	sButton = createButton('Take me back');
	sButton.position(0, 0);
	sButton.mousePressed(start);
}

function draw() {
	switch (state) {
		case "start":
			start();
			break;
		case "race":
			race();
	}
}

function start() {
	state = "start";

	rButton.show();
	sButton.hide();

	background('rgb(220,20,60)')
	
}

function race() {
	state = "race";

	rButton.hide();
	sButton.show();

	background('rgb(0,191,255)')


}