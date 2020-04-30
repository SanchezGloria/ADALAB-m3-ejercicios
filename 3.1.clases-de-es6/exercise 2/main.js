class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    console.log(this.side * 4 - 4);
  }
  area() {
    console.log(Math.pow(this.side, 2));
  }
}

// const squareP = new Square();
// const squareA = new Square();
const square1 = new Square(1);
const square2 = new Square(3);
const square3 = new Square(7);

// squareP.perimeter(9);
// squareA.area(9);
square1.perimeter();
square1.area();
square2.perimeter();
square2.area();
square3.perimeter();
square3.area();
