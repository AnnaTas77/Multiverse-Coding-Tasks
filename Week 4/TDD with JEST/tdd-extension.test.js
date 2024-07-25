const { greatestNum, lowestVal, sumOfOneToN } = require("./tdd-extension");
// Write your code here
describe("greatestNum", () => {
  test("should return the greatest of two numbers", () => {
    expect(greatestNum(2, 6)).toBe(6);
    expect(greatestNum(2, -12)).toBe(2);
    expect(greatestNum(-2, -6)).toBe(-2);
    expect(greatestNum(-2, -2)).toBe(-2);
  });

  test("should throw an error if the provided argument is not a number", () => {
    function callGreatestNum() {
      greatestNum(1, "Hello");
    }
    expect(callGreatestNum).toThrow();
  });
});

describe("lowestVal", () => {
  test("should return the lowest value in an array of numbers", () => {
    expect(lowestVal([1, 2, 3, 4])).toBe(1);
    expect(lowestVal([4, 3, 2])).toBe(2);
    expect(lowestVal([4, 4, 4, 4, 4])).toBe(4);
  });

  test("should throw an error if the array does not contain only numbers", () => {
    function callLowestVal() {
      lowestVal([1, 2, "hello"]);
    }
    expect(callLowestVal).toThrow(
      "Please check that your array only has numbers"
    );
  });
});

describe("sumOfOneToN", () => {
  test("should sum all values from 1 up to the provided number", () => {
    expect(sumOfOneToN(2)).toBe(3);
    expect(sumOfOneToN(10)).toBe(55);
    expect(sumOfOneToN(20)).toBe(210);
    expect(sumOfOneToN(39)).toBe(780);
  });

  test("if the user inputs a value less than 1, then it should throw an error ", () => {
    function callSumOfOneToN() {
      sumOfOneToN(0);
    }
    expect(callSumOfOneToN).toThrow("Please only use numbers larger than 1.");
  });

  test("if the user inputs a value less than or equal to 1, then it should throw an error ", () => {
    function callSumOfOneToN() {
      sumOfOneToN(1);
    }
    expect(callSumOfOneToN).toThrow("Please only use numbers larger than 1.");
  });
});
