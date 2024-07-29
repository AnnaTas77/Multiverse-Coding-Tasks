function sumNums(num) {
  // YOUR CODE: if num is 1, return 1

  if (num === 1) {
    return 1;
  }

  // DO NOT EDIT BELOW
  // recursive case: num must get closer to 1
  // add together the current num plus the sum of all the remaining numbers
  let sum = num + sumNums(num - 1);

  // return the sum
  return sum;
}

module.exports = sumNums;
