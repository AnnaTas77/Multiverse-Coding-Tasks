/* hasEqualXO Coding Challenge
Directions: Complete the following steps:

Write a function hasEqualXO that takes a string
hasEqualXO should return a boolean, and checks to see if a string has the same amount of 'x’s and 'o’s.
NOTE: The input should be case insensitive (checks both uppercase and lowercase). The string can contain any character.
*/

function hasEqualXO(str) {
  str = str.toLowerCase();

  let numberOfO = 0;
  let numberOfX = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "o") {
      numberOfO++;
    }
    if (str[i] === "x") {
      numberOfX++;
    }
  }

  if (numberOfO === numberOfX) {
    return true;
  } else {
    return false;
  }
}

console.log(hasEqualXO("ooxXm"));

/* firstNonConsecutive Coding Challenge
Directions: Complete the following steps:

Write a function, firstNonConsecutive, that takes an array of numbers
firstNonConsecutive should return the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1, 2, 3, 4, 6, 7, 8], 1 2 3 and 4 are all consecutive, but 6 is not, so that’s the first non-consecutive number.
If the whole array is consecutive then return null.
Run your code
Test your code.
 
Assumptions
The array will always have at least 2 elements
All elements will be numbers.
The numbers will all be unique and in ascending order.
The numbers could be positive or negative and the first non-consecutive could be either too!
*/

function firstNonConsecutive(arr) {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    let nextVal = arr[i + 1];
    let currentVal = arr[i];
    if (nextVal > currentVal + 1) {
      result = nextVal;
      break;
    }
  }

  if (result !== null) {
    return result;
  } else {
    return null;
  }
}

// console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([-1, 3, 4, 5, 6, 7, 10])); // 3

/** bacteriaTime Coding Challenge
Directions: Complete the following steps:

Define a function, bacteriaTime, that accepts two arguments:
currentNum (number) - number of starting bacteria
targetNum (number) - desired number of bacteria
Assuming that the number of bacteria doubles every 20 minutes, bacteriaTime should return the number of minutes required for the number of bacteria to grow from currentNum to a number equal to or larger than targetNum.
You can assume that currentNum will be a positive integer.
You should return a time rounded up to the nearest increment of 20 minutes. For example, if it takes 72 minutes to reach targetNum, then the value of 80 should be returned.
If targetNum is smaller than currentNum, return the string 'targetNum must be larger than currentNum'. */

function bacteriaTime(currentNum, targetNum) {
  let minutesRequired = 0;

  if (targetNum < currentNum) {
    return "targetNum must be larger than currentNum";
  }

  for (let i = 0; currentNum < targetNum; i++) {
    minutesRequired += 20;
    currentNum = currentNum * 2;
  }
  return minutesRequired;
}

console.log(bacteriaTime(1, 8));
console.log(bacteriaTime(100, 50));

/** gooseFilter Coding Challenge
Directions: Complete the following steps:

Write a function, gooseFilter, that takes an array of strings as an argument.
gooseFilter should return a filtered array containing the same elements but with the 'geese' removed.
The geese are these, pre-populated in your solution:
 

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
Run your code.
Test your code.
Constraints
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the ‘geese’ removed.
The returned array should be a different array (do not mutate the original array)
Note that all of the strings will be in the same case as those provided, and some elements may be repeated. */

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// DO NOT EDIT CODE ABOVE

// Write your code here

function gooseFilter(arr) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!geese.includes(arr[i])) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

console.log(gooseFilter(["Mallard", "African"]));

/** internationalPets Coding Challenge
Directions: Complete the following activity:

Write a function internationalPets that takes an animal name and a country name as arguments.
Using the globally-defined animalNoises array, internationalPets should return a sentence that explains which sound the animal makes in the given country.
Note that animalNoises contains nested objects. For example:

console.log(animalNoises[0].dog.America); // => 'Woof! Woof!'
console.log(animalNoises[1]['cat']['Korea']); // => 'Nyaong!' */

// DO NOT EDIT
let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];
// DO NOT EDIT CODE ABOVE

// Write your code here

function internationalPets(animalName, country) {
  animalName = animalName.charAt(0).toUpperCase() + animalName.slice(1);

  let resultNoise;

  for (let i = 0; i < animalNoises.length; i++) {
    let currentInnerObj = animalNoises[i];
    for (let key in currentInnerObj) {
      if (key === animalName.toLowerCase()) {
        resultNoise = currentInnerObj[key][country];
        console.log(resultNoise);
        break;
      }
    }
  }
  console.log(resultNoise);
  return `${animalName}s in ${country} say ${resultNoise}`;
}

// DO NOT EDIT CODE BELOW

console.log(internationalPets("cat", "Korea"));

/** onlyLetters Coding Challenge
Directions: Complete the following activity:

Write a function onlyLetters that takes a string as a parameter.
onlyLetters should return a new string with the numbers filtered out. */

// Write your code here

function onlyLetters(str) {
  let resultStr = "";

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i])) {
      resultStr += str[i];
    }
    continue;
  }

  return resultStr;
}

console.log(onlyLetters("1o2n3l4y5l6e7t8t9e10r11s12"));

/** getSize Coding Challenge
Directions: Complete the following activity:

Write a function named getSize that will take an Object as parameter.
Your function is to return the size of that object. (The amount of key-value pairs)
Run your code.
Test your code.
Examples
getSize({
  name: "Multiverse",
  language: "JavaScript", 
  week: 2
}); //-> 3

getSize({
  color: "black",
  type: "pen"
}); // -> 2 */

function getSize(obj) {
  let keyNumber = 0;
  for (let key in obj) {
    keyNumber++;
  }
  return keyNumber;
}

console.log(
  getSize({
    color: "black",
    type: "pen",
  })
);


