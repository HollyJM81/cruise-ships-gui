const { Itinerary } = require("../src/itinerary.js");

describe("Itinerary", () => {
	test("load a new itinerary", () => {
		expect(new Itinerary()).toBeInstanceOf(Object);
	});

	test("how many stops will we make?", () => {
		const itinerary = new Itinerary("Halifax", "New York");
		expect(itinerary.ports).toHaveLength(2);
	});
});