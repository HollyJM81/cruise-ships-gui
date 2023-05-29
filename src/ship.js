(function exportPort() {
	class Ship {
		constructor(itinerary) {
			this.itinerary = itinerary;
			this.previousPort = null;
			this.currentPort = this.itinerary.ports[0];
			this.currentPort.addShip(this);
		}

		setSail() {
			const itinerary = this.itinerary;
			const portIndex = itinerary.ports.indexOf(this.currentPort);
			if (portIndex >= itinerary.ports.length - 1) {
				throw new Error("Thanks for traveling!");
			}

			this.previousPort = this.itinerary.ports[portIndex];
			this.previousPort.removeShip(this);
			this.currentPort = null;
		}

		dock() {
			const itinerary = this.itinerary;
			const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
			this.currentPort = itinerary.ports[previousPortIndex + 1];
			console.log(this.currentPort);
			this.currentPort.addShip(this);
			console.log(`Ooh, isn't the weather lovely here in {$this.currentPort}!`);
		}
	}
})();

if (typeof module !== "undefined" && module.exports) {
	module.exports = Ship;
} else {
	window.Port = Ship;
}
