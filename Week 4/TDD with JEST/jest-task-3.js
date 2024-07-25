// Write your Square class here. Do this second!

class Square {
  constructor(height, width, x, y, color) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.color = color;
  }
  calculate() {
    return this.height * this.width;
  }
}

// DO NOT EDIT BELOW THIS LINE
module.exports = Square;
