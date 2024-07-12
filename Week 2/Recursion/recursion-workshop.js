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

// DO NOT EDIT CODE BELOW
module.exports = { sumNums };
