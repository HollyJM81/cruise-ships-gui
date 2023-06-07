(function exportShip() {

class Ship {
	constructor(itinerary, passengerList) {
		this.itinerary = itinerary;
		this.previousPort = null;
		this.currentPort = this.itinerary.ports[0];
		this.currentPort.addShip(itinerary);
		// a fun wee extra...
		this.passengerList = passengerList;
		this.passengersOnBoard = [];
	}

	setSail() {
		//leave the current dock
		const itinerary = this.itinerary;
		const portIndex = itinerary.ports.indexOf(this.currentPort);

		if (portIndex >= itinerary.ports.length - 1) {
			throw new Error("No more ports");
		}
		this.previousPort = this.itinerary.ports[portIndex];
		this.previousPort.removeShip(this);
		this.currentPort = null;


		// can't set sail without passengers...
		const passengerList = this.passengerList;
		let passengersOnBoard = this.passengersOnBoard;

		passengersOnBoard.push.apply(passengersOnBoard, passengerList);

	}

	dock() {
		// arrive at the next dock on the itinerary
		const itinerary = this.itinerary;
		const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

		this.currentPort = itinerary.ports[previousPortIndex + 1];
		this.currentPort.addShip(this);

		// let the passengers disembark
		let passengersOnBoard = this.passengersOnBoard;

		while (passengersOnBoard.length) {
			passengersOnBoard.pop();
		}
	}
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Ship;
} else {
  window.Ship = Ship;
}
}());

