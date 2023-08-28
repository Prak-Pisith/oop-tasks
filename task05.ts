abstract class Shape {
  protected abstract calculateArea(): number;
}

// Classes
class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

// Objects
const demoCircle = new Circle(9);
const demoRectangle = new Rectangle(4, 5);

console.log(`Circle area: ${demoCircle.calculateArea()}`);
console.log(`Rectangle area: ${demoRectangle.calculateArea()}`);