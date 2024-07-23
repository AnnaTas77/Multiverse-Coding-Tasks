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

class Character {
  constructor(health, speed, attackPower) {
    this.health = health;
    this.speed = speed;
    this.attackPower = attackPower;
  }

  move() {
    return `The character moves at a speed of ${this.speed}`;
  }
}

class Warrior extends Character {
  constructor(health, speed, attackPower, weapon) {
    super(health, speed, attackPower);
    this.weapon = weapon;
  }

  useWeapon() {
    return `The warrior attacks with a ${this.weapon}`;
  }
}

// DO NOT EDIT CODE BELOW
module.exports = {
  Shape,
  Circle,
  Character,
  Warrior,
};
