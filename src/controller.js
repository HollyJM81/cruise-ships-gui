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
		this.createDisplay();
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


	renderShip() {
		const ship = this.ship;
		const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
		const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
		const shipElement = document.querySelector('#ship');
		shipElement.style.top = `${portElement.offsetTop + 40}px`;
		shipElement.style.left = `${portElement.offsetLeft - 30}px`;
		};

		
	setSail() {
		const ship = this.ship
		const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
		const nextPortIndex = currentPortIndex + 1;
		const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

		if(!nextPortElement) {
			return this.renderMessage(`thanks for sailing with us!`);
		}

		  this.renderMessage(`${ship.currentPort.name} was nice! Where are the seasickness pills?`);
        ship.setSail();

		const shipElement = document.querySelector('#ship');
		const sailInterval = setInterval(() => {
			const shipLeft = parseInt(shipElement.style.left, 10);
			if (shipLeft === (nextPortElement.offsetLeft - 30)) {
				ship.dock();
				this.createDisplay();
				this.renderMessage(`Welcome to ${ship.currentPort.name}! Don't forget your sunscreen...`);
				clearInterval(sailInterval);
			}
			shipElement.style.left = `${shipLeft + 1}px`;
		}, 20);
		
	};

	createDisplay() {
        const ship = this.ship;
        const nextPortIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;

        const currentPortElement = document.getElementById("displayCurrPort");
        const nextPortElement = document.getElementById("displayNextPort");

        currentPortElement.innerHTML = `Current Port: ${ship.currentPort.name}`

        if (nextPortIndex < ship.itinerary.ports.length) {
            nextPortElement.innerHTML = `Next Port: ${ship.itinerary.ports[nextPortIndex].name}`;
        } else {
            nextPortElement.innerHTML = "End of our journey!"
        };
    }

addPort() {
	// give the user the ability to add ports to an itinerary (and the DOM).
// You will need to:

// Design a form alongside your viewport with a text input for the port's name, and a button to submit the form.
// Intercept and prevent the form submission with JavaScript, and use the form data to create a new Port object 
// (at which point you should update the DOM to show the new port.)

// Insert my code here:


}


	// stolen code:
	
	// addPort() {
    //     const ship = this.ship;
  
    //     const newPort = document.getElementById("input").value;
  
    //     const portObject = new Port(newPort);
  
    //     if (newPort === "") {
    //       return this.renderMessage("Where would you like to sail to today?");
    //     }

    //     ship.itinerary.ports.push(portObject);
  
    //     if (!ship.currentPort) {
    //       ship.currentPort = ship.itinerary.ports[0];
    //     }
    //   }

}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Controller;
} else {
  window.Controller = Controller;
}
}());
