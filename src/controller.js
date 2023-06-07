(function exportController() {
	class Controller {
	constructor(ship) {
		this.ship = ship;
		this.initialiseSea();
		document.querySelector('#sailbutton').addEventListener('click', () => {
    this.setSail();
  });
	}

	initialiseSea() {
		// this is working
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
		// this is working
		
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
	}

	renderMessage(message) {
		const viewportElement = document.querySelector("#viewport");
		const newMessage = document.createElement("div");
		newMessage.id = "message";
		newMessage.innerHTML = `${message}`;
		viewportElement.appendChild(newMessage);



		window.setTimeout(() => {
			const message = document.querySelector("#message");
			viewportElement.removeChild(message);
			}, 2000);
	}


	// renderShip(ship) {
	// 	const ship = this.ship;
	// 	const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
	// 	const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
	// 	const shipElement = document.querySelector('#ship');
	// 	shipElement.style.top = `${portElement.offsetTop}px`;
	// 	shipElement.style.left = `${portElement.offsetLeft}px`;
	// 	shipElement.style.top = `${portElement.offsetTop + 40}px`;
	// 	shipElement.style.left = `${portElement.offsetLeft - 30}px`;
	// 	// const sailInterval = setInterval(() => {
	// 	// const shipLeft = parseInt(shipElement.style.left, 10);
	// 	// if (shipLeft === (nextPortElement.offsetLeft - 32)) {
	// 	// 	ship.setSail();
	// 	// 	ship.dock();
			
	// 	// 	clearInterval(sailInterval);
	// 	// }

	// 	// shipElement.style.left = `${shipLeft + 1}px`;
	// 	// }, 25);
	// 	// shipElement.style.top = `${portElement.offsetTop + 40}px`;
	// 	// shipElement.style.left = `${portElement.offsetLeft - 30}px`;
	// 	// const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
	// 	};

		
	// setSail() {
	// 	const ship = this.ship
	// 	const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
	// 	const nextPortIndex = currentPortIndex + 1;
	// 	const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
		
	// 	if (!nextPortElement) {
	// 	renderMessage(`That's your lot, sunshine...`);
	// 	}
	// 	const shipElement = document.querySelector('#ship');
	// 	const sailInterval = setInterval(() => {
	// 		const shipLeft = parseInt(shipElement.style.left, 10);
	// 		if (shipLeft === (nextPortElement.offsetLeft - 30)) {
	// 			ship.setSail();
	// 			renderMessage(`Did you pack the seasickness pills?`);
	// 			ship.dock();
	// 			renderMessage(`Ooh, ${currentPort} looks nice!`);
	// 			clearInterval(sailInterval);
	// 		}

	// 		shipElement.style.left = `${shipLeft + 1}px`;
	// 	}, 20);
	// };
	}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Controller;
} else {
  window.Controller = Controller;
}
}());
