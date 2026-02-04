class Vehicle {
  start() {
      this.engine();
      console.log("Vehicle started");
  }

  engine() {
      console.log("Engine is running");
  }
}

const car = new Vehicle();
car.start();
