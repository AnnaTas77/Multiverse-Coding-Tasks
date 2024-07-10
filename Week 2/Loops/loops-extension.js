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

/* compareObjects Coding Challenge
Directions: Complete the following activity:

Define a function, compareObjects, that accepts two objects as arguments.
compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false. Assume the objects are not nested.
Run your code.
Test your code.
Examples
compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true
compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
Hint: We cannot directly check if one object is strictly equal to the other, since (unlike Strings/Numbers) Arrays and Objects are Pass-By-Reference, meaning two different objects with the exact same key-value pairs will not be equal to each other. For example:

const obj1 = {
  luckyNumber: 7
};

const obj2 = {
  luckyNumber: 7
};

console.log(obj1 === obj1); // => true
console.log(obj1 === obj2); // => false
*/

function compareObjects(obj1, obj2) {
  let obj1ToStr = JSON.stringify(obj1);
  let obj2ToStr = JSON.stringify(obj2);

  return obj1ToStr === obj2ToStr;
}

console.log(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 }));

/* frequencyAnalysis Coding Challenge
Directions: Complete the following activity:

Define a function frequencyAnalysis that accepts a string of lower-case letters as a parameter.
frequencyAnalysis should return an object containing the amount of times each letter appeared in the string.
Run your code.
Test your code.
Example
frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
*/

function frequencyAnalysis(str) {
  const myObj = {};

  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    let arrayOfKeysInMyObj = Object.keys(myObj);

    if (!arrayOfKeysInMyObj.includes(str[i])) {
      myObj[currentLetter] = 1;
    } else {
      myObj[currentLetter] += 1;
    }
  }
  return myObj;
}

console.log(frequencyAnalysis("i like pumpkins"));

/* dogBreeder Coding Challenge
Directions: Complete the following activity:

Define a function, dogBreeder, that accepts up to two optional arguments:
name (string)
age (number)
dogBreeder should return an object that represents a new dog! If the user doesn’t define a name, assume the dog’s name is 'Steve’. If the user doesn’t define the dog’s age, assume the dog’s age is 0.
Run your code.
Test your code.
Examples
dogBreeder('Sam', 12) // => {name: 'Sam', age: 12}

dogBreeder(15) // => {name:'Steve', age: 15}

dogBreeder('Sam') // => {name:'Sam', age: 0}

dogBreeder() // => {name: 'Steve', age: 0} 
*/

function dogBreeder(name = "Steve", age = 0) {
  const dogObj = {};
  if (isNaN(name)) {
    dogObj["name"] = name;
    dogObj["age"] = age;
  } else {
    dogObj["name"] = "Steve";
    dogObj["age"] = name;
  }

  return dogObj;
}

console.log(dogBreeder(12));
console.log(dogBreeder("Snoopy", 3));

/* leetTranslator Coding Challenge
Directions: Complete the following activity:

“Leet” or 1337 is a popular alternative alphabet used by internet "hackers".

Define a function called leetTranslator that takes a string of normal characters as a parameter.
leetTranslator should return a new string that is the translation of the original string into leet.
The leet codex is below, along with an array of English letters and an array of the corresponding leet characters. Use the two arrays to create a leetCodex object to use in making the translations.
Run your code.
Test your code.
 
Examples
/*
Leet Codex:
        A -> @
        B -> 8
        C -> (
        D -> |)
        E -> 3
        F -> ph
        G -> g
        H -> #
        I -> l
        J -> _|
        K -> |<
        L -> 1
        M -> |'|'|
        N -> /\/
        O -> 0
        P -> |D
        Q -> (,)
        R -> |2
        S -> 5
        T -> +
        U -> |_|
        V -> |/
        W -> |/|/'
        X -> ><
        Y -> j
        Z -> 2
*/

// let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
// let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// leetTranslator('Multiverse'); // => "|'|'||_|1+l|/3|253"

// DO NOT EDIT
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];
// DO NOT EDIT CODE ABOVE

// Write your code here

function leetTranslator(str) {
  str = str.toLowerCase();
  let translationStr = "";

  const leetCodexObject = {};

  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    let currentLeetChar = leetChars[i];
    leetCodexObject[currentLetter] = currentLeetChar;
  }
  // console.log(leetCodexObject)

  for (let j = 0; j < str.length; j++) {
    let translatedLetter = leetCodexObject[str[j]];
    // console.log(translatedLetter)
    translationStr += translatedLetter;
  }
  return translationStr;
}

console.log(leetTranslator("Multiverse")); // => "|'|'||_|1+l|/3|253"

/** attendanceCheck Coding Challenge
Directions: Complete the following activity:

Define a function, attendanceCheck, that accepts a string parameter corresponding to a day of the week.
Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.
Run your code.
Test your code.
Examples
attendanceCheck('Monday'); // => ['Marnie', 'Shoshanna']
attendanceCheck('Wednesday'); // => ['Marnie', 'Lena'] */

// DO NOT EDIT CODE
let classRoom = [
  {
    Marnie: [
      {
        Monday: true,
      },
      {
        Tuesday: true,
      },
      {
        Wednesday: true,
      },
      {
        Thursday: true,
      },
      {
        Friday: true,
      },
    ],
  },
  {
    Lena: [
      {
        Monday: false,
      },
      {
        Tuesday: false,
      },
      {
        Wednesday: true,
      },
      {
        Thursday: false,
      },
      {
        Friday: true,
      },
    ],
  },
  {
    Shoshanna: [
      {
        Monday: true,
      },
      {
        Tuesday: true,
      },
      {
        Wednesday: false,
      },
      {
        Thursday: true,
      },
      {
        Friday: false,
      },
    ],
  },
  {
    Jessa: [
      {
        Monday: false,
      },
      {
        Tuesday: false,
      },
      {
        Wednesday: false,
      },
      {
        Thursday: false,
      },
      {
        Friday: true,
      },
    ],
  },
];
// DO NOT EDIT CODE ABOVE

// Write your code here
function attendanceCheck(dayOfTheWeek) {
  const arrayOfAttendees = [];
  for (let i = 0; i < classRoom.length; i++) {
    let innerObject = classRoom[i];
    // console.log(innerObject)
    for (const [key, value] of Object.entries(innerObject)) {
      let currentPerson = key;
      let arrayOfDays = value;
      //   console.log(arrayOfDays)
      for (const index in arrayOfDays) {
        let miniObject = arrayOfDays[index];
        //   console.log('Here', miniObject)
        if (miniObject[dayOfTheWeek]) {
          arrayOfAttendees.push(currentPerson);
        }
      }
    }
  }
  return arrayOfAttendees;
}

console.log(attendanceCheck("Monday"));
