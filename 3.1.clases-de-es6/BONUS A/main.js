class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
    // const result = this.base ** 2;
    // const result = this.base ** 3; (elevarlo al cuadrado/cubo)
  }
}
class Square extends Polygon {
  constructor(base) {
    super(4, base, base);
    this.side = base;
  }
}
class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

const triangle = new Triangle(4, 3);
const square = new Square(4);

console.log(triangle.perimeter());
console.log(triangle.area());
console.log(square.perimeter());
console.log(square.area());
