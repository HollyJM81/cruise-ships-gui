class Controller {
	constructor() {}

	initialiseSea() {
		const backgrounds = ["./images/water0.png", "./images/water1.png"];
		let backgroundIndex = 0;
		window.setInterval(() => {
			document.querySelector("#viewport").style.backgroundImage = `url('${
				backgrounds[backgroundIndex % backgrounds.length]
			}')`;
			backgroundIndex += 1;
		}, 1000);
	}

	renderPorts(ports) {
		this.ports = [...ports];
	}
}

module.exports = { Controller };
