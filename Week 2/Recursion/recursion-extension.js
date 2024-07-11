/** countVowels Coding Challenge
Directions: Complete the following steps:

Write a function, countVowels, that accepts a string as an argument
countVowels should return the number of vowels in that string. Use recursion.
Run your code.
Test your code. */

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let numOfVowels = 0;
  const strToArray = [...str];

  if (strToArray.length === 0) {
    return 0;
  }

  if (strToArray.length === 1) {
    if (vowels.includes(str[0].toLowerCase())) {
      numOfVowels += 1;
    }
  }

  if (vowels.includes(strToArray[0].toLowerCase())) {
    numOfVowels += 1;
  }
 
  const removedFirstChar = strToArray.shift();
  return numOfVowels + countVowels(strToArray);

}

console.log(countVowels("Four score and seven years"));

// DO NOT EDIT BELOW
module.exports = { countVowels };
