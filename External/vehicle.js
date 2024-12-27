class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    displayDetails() {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
      class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year);
      this.doors = doors;
    }
    displayDetails() {
      super.displayDetails();
      console.log(`Number of doors: ${this.doors}`);
    }
  }
  
  let car = new Car("Toyota", "Camry", 2020, 4);
  car.displayDetails();
  