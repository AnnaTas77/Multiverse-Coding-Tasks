// Parent class
class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {
    return `Drawing a ${this.color} shape.`;
  }
}
// Write your code here

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  calculateArea() {
    const PI = Math.PI.toFixed(2);
    return PI * this.radius * this.radius;
  }
}

// DO NOT EDIT CODE BELOW
module.exports = {
  Shape,
  Circle,
};
