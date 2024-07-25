#!/bin/node
const Square = require("./jest-task-3");
// Write your Square tests here. Do these first!

describe("Square class", () => {
  const square1 = new Square(2, 2, 3, 3, "blue");

  it("is an instance of the Square class", () => {
    expect(square1 instanceof Square).toBeTruthy();
  });

  it("has a height of 2", () => {
    expect(square1.height).toBe(2);
  });

  it("has a width of 2", () => {
    expect(square1.width).toBe(2);
  });

  it("has an X of 3", () => {
    expect(square1.x).toBe(3);
  });

  it("has a Y of 3", () => {
    expect(square1.y).toBe(3);
  });

  it("has blue color", () => {
    expect(square1.color).toBe("blue");
  });

  it("has a calculate() method that calculates the area", () => {
    expect(square1.calculate()).toBe(4);
  });
});
