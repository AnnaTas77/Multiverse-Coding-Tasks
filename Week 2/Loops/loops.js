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
