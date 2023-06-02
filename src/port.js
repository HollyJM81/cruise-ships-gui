class Port {
	constructor(port) {
		this.name = port;
		this.ships = [];
	}

	addShip(ship) {
		this.ships.push(ship);
	}

	removeShip(ship) {
		const i = this.ships.indexOf(ship);
		this.ships.splice(i, 1);
	}
}

module.exports = { Port };
