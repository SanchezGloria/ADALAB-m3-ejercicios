// class Square {
//   perimeter(side) {
//     console.log(side * 4);
//   }
//   area(side) {
//     console.log(Math.pow(side, 2));
//   }
// }

// // const squareP = new Square();
// // const squareA = new Square();
// const square = new Square();

// // squareP.perimeter(9);
// // squareA.area(9);
// square.perimeter(9);
// square.area(9);

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    let perimeter = this.side * 4 - 4;
    console.log(perimeter);

    return perimeter;
  }
  area() {
    console.log(Math.pow(this.side, 2));
  }
}
const square = new Square(1);
const square2 = new Square(3);
const square3 = new Square(7);

square.perimeter();
square.area();
square2.perimeter();
square2.area();
square3.perimeter();
square3.area();
