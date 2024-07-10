// WHILE LOOPS

function logNumbers() {
  //Write your code here

  let count = 1;

  while (count < 51) {
    console.log(count);
    count++;
  }
}

logNumbers();

// FOR LOOPS

function toOneHundred() {
  // Write your code here

  for (let i = 0; i < 101; i++) {
    console.log(i);
  }
}

toOneHundred();

// ARRAY LOOPS

function sumArray(arr) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3]));

// OBJECT LOOPS

let companies = {
  Apple: 2600000000000,
  Microsoft: 2290000000000,
  Amazon: 1740000000000,
  Alphabet: 1680000000000,
  Tesla: 910000000000,
  Facebook: 855000000000,
  Walmart: 405000000000,
};

function sumObject(obj) {
  // Write your code here
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(sumObject(companies));

/** Coding Challenge
Directions: 

Test #1: whileCounting
Inside the whileCounting function do the following:

Initialize a count variable with a value of 1.
Create a while loop that console.log's all values from 1 to 20.
Run your code.

The tests for this are checking the values you console.log, so make sure you only have a console.log that does what is outlined in step 2.
Example

whileCounting();
/*
Prints out:
1
2
3
4
...
20
*/

// Test #2: onlyEvens
// Inside the onlyEvens function do the following:

// Initialize a for loop that increments from 1 to 100.
// console.log ONLY numbers that are even.
// Run your code.

// The tests for this are checking the values you console.log, so make sure you only have a console.log that does what is outlined in step 2.
// Example

// onlyEvens();
/*
Prints out:
2
4
6
8
...
98
100
*/
////Test #3: complementGenerator
//The function complementGenerator an array of names. Inside the function, do the following:
//complementGenerator should return an updated array with the string “ is the best!” added to the end of each name.

// complementGenerator(["Elvis", "Dan"]); // => ["Elvis is the best!", "Dan is the best!"]
// complementGenerator(["Kari", "Dana", "Tammy"]); // => ["Kari is the best!", "Dana is the best!", "Tammy is the best!"] */

function whileCounting() {
  // TEST #1 CODE HERE
  let count = 1;

  while (count < 21) {
    console.log(count);
    count++;
  }
}

whileCounting();

function onlyEvens() {
  // TEST #2 CODE HERE
  for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

onlyEvens();

function complimentGenerator(names) {
  // TEST #3 CODE HERE

  let resultArr = [];

  for (let i = 0; i < names.length; i++) {
    resultArr.push(`${names[i]} is the best!`);
  }

  return resultArr;
}

console.log(complimentGenerator(["Kari", "Dana", "Tammy"]));

/** makeArray Coding Challenge 
Directions: Complete the following steps:   

Write a function called makeArray that does the following:
Create an empty array called arr.
Create a loop that pushes the numbers 0 to 100 to arr.
Return arr with all of the values. */

function makeArray() {
  // Write your code here
  let arr = [];
  for (let i = 0; i < 101; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(makeArray());

/** sumArrays Coding Challenge 
Directions: Complete the following steps:   

Write a function, sumArrays, that takes an array of numbers
sumArrays should return the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. */

function sumArrays(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArrays([1, 2, 3]));

/** startsWithVowel Coding Challenge 
Directions: Complete the following steps:   

The function startsWithVowel(words) accepts an array of words as an argument. Update the function so that it returns an array of only the words that start with a vowel.
HINT: Make sure to account for both uppercase and lowercase letters.
Run your code. */

function startsWithVowels(words) {
  // Write your code here
  const vowels = ["a", "e", "i", "o", "u", "y"];

  let resultArr = [];

  for (let i = 0; i < words.length; i++) {
    let firstChar = words[i][0].toLowerCase();

    if (vowels.includes(firstChar)) {
      resultArr.push(words[i]);
    }
  }

  return resultArr;
}

const cities = [
  "New York",
  "Oslo",
  "Athens",
  "Tokyo",
  "Sydney",
  "Edinburgh",
  "Rio de Janeiro",
];
const testVowel = startsWithVowels(cities);

console.log(testVowel);

/* hasNull Coding Challenge 
Directions: Complete the following steps:   

Write a function named hasNull that will take an Object as input.
Your function is to return the whether or not there is a value of null present in that Object (The key-value pairs) */

// Write Your code here

function hasNull(obj) {
  let hasNull = false;
  for (let key in obj) {
    if (obj[key] === null) {
      hasNull = true;
    }
  }
  return hasNull;
}

console.log(
  hasNull({
    key1: "value1",
    key2: null,
  })
);

/* totalTransactions Coding Challenge 
Directions: Complete the following steps:   

Define a function, totalTransactions, that takes an array of objects called transactions.
Define a function, totalTransactions, that takes an array of objects called transactions. For example, to access the first name and amount values, we could use the index of 0 (for the first list item) followed by the individual key values:

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

console.log(transactions[0].name); // Prints "Tons of glitter"
console.log(transactions[0].amount); // Prints 70
totalTransactions should return the total amount spent on all transactions. For example, the transactions object above would return the following:

totalTransactions(transactions) // => 10512 
*/

function totalTransactions(arr) {
  let totalAmount = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentObj = arr[i];

    for (let key in currentObj) {
      if (key === "amount") {
        totalAmount += currentObj[key];
      }
    }
  }
  return totalAmount;
}

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];

console.log(totalTransactions(transactions)); // 10512
// console.log(transactions[0].amount); // Prints 70
