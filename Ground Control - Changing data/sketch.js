//Setup Variables
let button;
let msg = "Position not defined";
let counter = 0;

function setup() {
	//Create the button
	button = createButton("Current Position")
	button.size(110)
	button.mousePressed(speak);

	//Load the json when site is launched
	loadJSON('http://api.open-notify.org/iss-now.json', gotData, 'jsonp');
}

//When date is recieved, set it as the message
function gotData(data) {
	msg = new SpeechSynthesisUtterance();
	msg.text = "This is ground control, currunt position is " + data.iss_position.latitude + " latitude, and " + data.iss_position.longitude + " longitude.";
}

//When the button is pressed, speak
function speak() {
	window.speechSynthesis.speak(msg);
}

//Load the json rougly every second
function draw(){
	counter++
	if(counter%60 == 0){
		loadJSON('http://api.open-notify.org/iss-now.json', gotData, 'jsonp');
	}
}