// Write your code here

const greatestNum = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Invalid input.");
  }
  return Math.max(num1, num2);
};

function lowestVal(numberArr) {
  numberArr.forEach((el) => {
    if (typeof el !== "number") {
      throw new Error("Please check that your array only has numbers");
    }
  });
  const lowestNum = Math.min(...numberArr);
  return lowestNum;
}

function sumOfOneToN(num) {
  if (num <= 1) {
    throw new Error("Please only use numbers larger than 1.");
  }

  let sumOfNums = 0;

  for (let i = num; i >= 0; i--) {
    sumOfNums += i;
  }
  return sumOfNums;
}

// DO NOT EDIT CODE BELOW
module.exports = { greatestNum, lowestVal, sumOfOneToN };
