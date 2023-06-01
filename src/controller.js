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
		//this should be making the sea move - it isn't
	}

	renderPorts(ports) {
		this.ports = [ports];
		const portsElement = document.querySelector("#ports");
		portsElement.style.width = "0px";

		ports.forEach((port, index) => {
			const newPortElement = document.createElement("div");
			newPortElement.className = "port";
			newPortElement.dataset.portName = port.name;
			newPortElement.dataset.portIndex = index;
			portsElement.appendChild(newPortElement);
			const portsElementWidth = parseInt(portsElement.style.width, 10);
			portsElement.style.width = `${portsElementWidth + 256}px`;
		});
		// this should be rendering ports - it isn't
	}
}

module.exports = { Controller };
