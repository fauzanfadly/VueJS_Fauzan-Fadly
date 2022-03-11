class Vehicle {
  constructor() {
    this.wheel = 0;
    this.speed = 0;
  }
}

class Car extends Vehicle {
  move(distance) {
    for (let step = 0; step < distance; step++) {
      this.increaseSpeed(10);
    }
  }

  increaseSpeed(newSpeed) {
    this.speed += newSpeed;
  }

  display(speedLevel) {
    console.log("mobil " + speedLevel + " : " + this.speed + "km/jam");
  }
}

function main() {
  let fastCar = new Car();
  fastCar.move(3);
  fastCar.display("cepat");

  let slowCar = new Car();
  slowCar.move(1);
  slowCar.display("lamban");
}

main();
