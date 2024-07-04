/* Convert Celsius to Fahrenheit
Write a function celsiusToFahrenheit that takes a single number (temperature in Celsius) as a parameter and returns the temperature converted to Fahrenheit. The formula is F = C * 9/5 + 32.
*/

// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = (celsius * 9) / 5 + 32;
//   return `${celsius} degrees Celsius is ${fahrenheit} degrees Fahrenheit.`;
// }

// console.log(celsiusToFahrenheit(0));

/* Find the Larger Number
Write a function max that takes two numbers as parameters and returns the larger of the two. There is a built-in Math.max() method you could use for this, but see if you can do it without. */

// function findMaxNumber(num1, num2) {
//   let maxNum = Math.max(num1, num2);
//   return `The max number is ${maxNum}.`;
// }

// console.log(findMaxNumber(10, 50));

/* Calculate the Area of a Circle
Write a function circleArea that takes a single number (radius) as a parameter and returns the area of a circle with that radius. The formula is A = π * r^2. You can use Math.PI for the value of π.*/

// const circleArea = (radius) => {
//   const pi = 3.14;

//   const circleArea = pi * radius * radius;

//   return `The circle area is: ${circleArea}`;
// };

// console.log(circleArea(10));

/* Check for Vowel
Write a function isVowel that takes a single character as a parameter and returns true if the character is a vowel (a, e, i, o, u), and false otherwise. */

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  char = char.toLowerCase();

  let result = vowels.includes(char);

  return result;
}

console.log("'A' is vowel: ", isVowel("A"));
console.log("'Z' is vowel: ", isVowel("Z"));

/* Find the Minimum of Three Numbers
Write a function minOfThree that takes three numbers as parameters and returns the smallest of the three. There is a built-in Math.min() method you could use for this, but see if you can do it without. */

function minOfThree(num1, num2, num3) {
  let minNum = num1;

  if (num2 < minNum) {
    minNum = num2;
  } else if (num3 < minNum) {
    minNum = num3;
  }

  return minNum;
}

console.log("The min number is: ", minOfThree(5, 19, 100));
console.log("The min number is: ", minOfThree(-17, 0, 75));

/* Sum of Digits
Write a function sumOfDigits that takes a single number as a parameter and returns the sum of its digits. For example, sumOfDigits(123) should return 6. */

function sumOfDigits(num) {
  const numToArrayofChars = [...String(num)];

  let result = 0;

  numToArrayofChars.forEach((char) => {
    result += Number(char);
  });

  return `The sum of digits of ${num} is: ${result}.`;
}

console.log(sumOfDigits(123));
console.log(sumOfDigits(2352));

/* Reverse a String
Write a function reverseString that takes a single string as a parameter and returns the string reversed. For example, reverseString("hello") should return "olleh".*/

// function reverseString(str) {
//   const strToArray = [...str];

//   const reversedArray = strToArray.reverse();

//   return reversedArray.join("");
// }

// console.log("Reversed string: ", reverseString("hello"));

/* Palindrome Checker
Write a function isPalindrome that takes a single string as a parameter and returns true if the string is a palindrome, and false otherwise. */

function isPalindrome(str) {
  str = str.toLowerCase();
  const strToArray = [...str];

  const reversedArray = strToArray.reverse();

  const reversedStr = reversedArray.join("");

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log("Is 'Anna' a palindrome? - ", isPalindrome("Anna"));
console.log("Is 'NooN' a palindrome? - ", isPalindrome("NooN"));
console.log("Is 'racecar' a palindrome? - ", isPalindrome("racecar"));
console.log("Is 'hello' a palindrome? - ", isPalindrome("hello"));

/* Capitalize the First Letter
Write a function capitalize that takes a single string as a parameter and returns the string with the first letter capitalized. */

// function capitalize(str) {
//   const firstLetter = str.charAt(0).toUpperCase();
//   const remainingLetters = str.slice(1);
//   return firstLetter + remainingLetters;
// }

// console.log(capitalize("welcome!"));
// console.log(capitalize("samantha"));

/* Calculate the Average
Write a function average that takes two numbers as parameters and returns their average.*/

// function calculateAverage(num1, num2) {
//   return (num1 + num2) / 2;
// }

// console.log("The average is: ", calculateAverage(12, 5));
// console.log("The average is: ", calculateAverage(2, 6));

/* Convert Minutes to Seconds
Write a function minutesToSeconds that takes a single number (minutes) as a parameter and returns the equivalent number of seconds. */

// function minutesToSeconds(minutes) {
//   return `${minutes} minutes are ${minutes * 60} seconds.`;
// }

// console.log(minutesToSeconds(2));
// console.log(minutesToSeconds(60));
