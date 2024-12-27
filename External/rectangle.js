class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    calculateArea() {
      return this.width * this.height;
    }
    calculatePerimeter() {
      return 2 * (this.width + this.height);	  }
  }
  let rectangle = new Rectangle(5, 10);
  console.log("Area: " + rectangle.calculateArea());
  console.log("Perimeter: " + rectangle.calculatePerimeter());
  