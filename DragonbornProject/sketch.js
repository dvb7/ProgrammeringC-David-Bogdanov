function preload() {
	db = loadJSON("dragonborn.json");
}

function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(150)
	
	//Draw the Dragonborn
	for (i = 0; i <= 5; i ++) {

		//Decide the color
		switch (db.dragonborn[i].type) {
			case ("Black"):
				fill('rgb(42,52,57)');
				break;
			case ("Blue"):
				fill('rgb(46,88,148)');
				break;
			case ("Brass"):
				fill('rgb(181,166,66)');
				break;
			case ("Bronze"):
				fill('rgb(205,127,50)');
				break;
			case ("Copper"):
				fill('rgb(184,115,51)');
				break;
			case ("Gold"):
				fill('rgb(252,194,0)');
		}

		//Draw the head
		strokeWeight(1);
		ellipse((i+1)*100, 100, 80);

		//Time for eyes
		fill(0);
		ellipse(((i+1)*100)-15, 85, 10);
		ellipse(((i+1)*100)+15, 85, 10);

		//Now with extra Brow(Tm)
		strokeWeight(2);
		line(((i+1)*100)-16, 70, ((i+1)*100)-8, 80);
		line(((i+1)*100)+8, 80, ((i+1)*100)+16, 70);

		//Gimme a mouth, baby
		
	}
}