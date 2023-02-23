//Create a new passenger

//@:ts-check

class Passenger {
      name;
      bags = [];
      constructor ( name ) {
            this.name = name;
            return this;
      }

      addBag ( bag ) {
            this.bags.push( bag );
      }
}

module.exports = Passenger;
