function preload() {
	word = loadJSON("insults.json");
}

function setup() {
	createCanvas(600, 600);

	if ('speechSynthesis' in window) {
		// Speech Synthesis supported 🎉
		speechSynthesis.getVoices().forEach(function(voice) {
  		console.log(voice.name, voice.default ? voice.default :'');
		});

	}
	else {
		// Speech Synthesis Not Supported 😣
		alert("Sorry, your browser doesn't support text to speech!");
	}
	   
}

function mousePressed() {
	if (mouseButton === LEFT) {
	  //Is button pressed?
	  if (mouseX >= 275 && mouseX <= 325 && mouseY >= 275 && mouseY <= 325) {
		//Speak
		var msg = new SpeechSynthesisUtterance();
		var voices = window.speechSynthesis.getVoices();
		msg.voice = voices[3]; 
		msg.text = word.insults[Math.floor(Math.random() * word.insults.length)];
		window.speechSynthesis.speak(msg);
	  }
	}
}

function draw() {
	background(150);

	//Draw the button
	fill('rgb(50,205,50)')
	rect(275, 275, 50, 50, 5)



}