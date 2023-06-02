// (function exportPort() {
class Ship {
	constructor(itinerary, passengerList) {
		this.itinerary = itinerary;
		this.previousPort = null;
		this.currentPort = this.itinerary.ports[0];
		this.currentPort.addShip(this);
		// a fun wee extra...
		this.passengerList = passengerList;
		this.passengersOnBoard = [];
		// this.passengersOnBoard = [];
	}

	allAboard() {
		this.passengerList = passengerList;
		this.passengersOnBoard = [];
		this.passengersOnBoard.concat(passengerList);
		console.log(passengersOnBoard);
	}

	setSail() {
		const itinerary = this.itinerary;
		const portIndex = itinerary.ports.indexOf(this.currentPort);
		if (portIndex >= itinerary.ports.length - 1) {
			throw new Error("Thanks for traveling!");
		}

		this.previousPort = this.itinerary.ports[portIndex];
		// can't set sail without passengers...
		this.allAboard();
		this.previousPort.removeShip(this);
		this.currentPort = null;
	}

	dock() {
		const itinerary = this.itinerary;
		const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
		this.currentPort = itinerary.ports[previousPortIndex + 1];
		console.log(this.currentPort);
		this.currentPort.addShip(this);
		while (passengersOnBoard.length) {
			onBoard.pop();
		}
		console.log(`Ooh, isn't the weather lovely here in {$this.currentPort}!`);
	}
}
// })();

module.exports = { Ship };

// if (typeof module !== "undefined" && module.exports) {
// 	module.exports = Ship;
// } else {
// 	window.Port = Ship;
// }
