//Test bags can be added to passengers

const Passenger = require('./passenger.js');
const Bag = require('./bag.js');

test('Passenger can add bags', () => {
    const passenger = new Passenger('Test Name');
    const bag = new Bag(10);
    passenger.addBag(bag);
    expect(passenger.bags.length).toEqual(1);
});