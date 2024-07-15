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

  let firstChar = strToArray.shift();

  if (vowels.includes(firstChar.toLowerCase())) {
    numOfVowels += 1;
  }

  return numOfVowels + countVowels(strToArray);
}

console.log(countVowels("Four score and seven years"));

/** isPalindrome Coding Challenge
Directions: Complete the following steps:

 

A palindrome is a word that is spelled the same forwards and backwards. For example, "LEVEL", "RACECAR", and “KAYAK” are all palindromes, while "MOTOR", "RUDDER", and “DOGGED” are not palindromes.

Write a recursive function, isPalindrome, to check if a string is a palindrome.
Return true if the string is a palindrome; otherwise, return false.
 */

function isPalindrome(str) {
  if (str.length === 1 || str.length === 0) {
    return true;
  }

  str = str.toLowerCase();

  const strToArray = [...str];

  let lastChar = strToArray.pop();
  let firstChar = strToArray.shift();

  return lastChar === firstChar && isPalindrome(strToArray.join(""));
}

console.log(isPalindrome("Kayak"));
console.log(isPalindrome("UFOtofu"));

// DO NOT EDIT BELOW
module.exports = { countVowels, isPalindrome };
