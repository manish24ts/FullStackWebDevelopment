class Shape {
    calculateArea() {
      return 0; // Default implementation, to be overridden by subclasses
    }
  }
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }	class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  let circle = new Circle(5);
  console.log("Circle Area: " + circle.calculateArea());
  