/** sumNums Coding Challenge 
Directions: Complete the activity below:

Write a recursive function named sumNums that will take one number as input.
sumNums should return the sum of 1 up to the number passed in as input.
Run your code.
Test your code.
Examples
sumNums(10) -> 55
sumNums(15) -> 120 */

function sumNums(num) {
  if (num === 1) {
    return 1;
  }

  return num + sumNums(num - 1);
}

console.log(sumNums(10)); //55
console.log(sumNums(15)); //120

/** Recursive Exponent Coding Challenge 
Directions: Complete the activity below:

Write a recursive function named exponent which will take two numbers as parameters. The first number is the base and the second number is the exponent.
The base case is that any base number raised to exponent 0, results in 1.
Your function is to return the value of the base number raised to the exponent number.
Run your code.
Test your code.
Examples
exponent(4,2) -> 16
exponent(3,3) -> 27
exponent(2,8) -> 256 */

function exponent(baseNum, exponentNum) {
  if (exponentNum === 0) {
    return 1;
  }

  return baseNum * exponent(baseNum, exponentNum - 1);
}

console.log(exponent(4, 2));

// DO NOT EDIT CODE BELOW
module.exports = { sumNums, exponent };
