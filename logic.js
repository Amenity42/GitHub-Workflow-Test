//@ts-check

const Bag = require( './bag.js' );
const Passenger  = require( './passenger.js' );

//Create bags

const bag1 = new Bag(10);

//Create a new passenger

const passenger1 = new Passenger('kiwi');
const passenger2 = new Passenger('foobar');

passenger1.addBag( bag1 );
passenger1.addBag( bag1 );
passenger1.addBag( bag1 );

console.table( passenger1 );

//console.table( passenger2 );