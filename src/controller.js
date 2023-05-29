class Controller {
	constructor() {}

	initialiseSea() {
		// use setInterval to run a callback function every
		// 1000 milliseconds.
		const backgrounds = ["./images/water0.png", "./images/water1.png"];
		let backgroundIndex = 0;
		window.setInterval(() => {
			document.querySelector("#viewport").style.backgroundImage = `url('${
				backgrounds[backgroundIndex % backgrounds.length]
			}')`;
			backgroundIndex += 1;
		}, 1000);
		// Inside the callback function use
		// document.querySelector to find the #viewport
		// element and change the background image so it
		// alternates between water0.png and water1.png.
		// You'll probably want to keep some sort of "counter"
		// variable outside of your setInterval to determine which
		// background image to use.
	}
}

module.exports = { Controller };
