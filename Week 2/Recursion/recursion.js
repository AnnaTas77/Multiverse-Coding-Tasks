/**
Recursion is when a function must call itself in order to resolve a solution.
 */

function orderWords(word1, word2) {
  if (word1.length <= word2.length) {
    // Ends the function
    return [word1, word2];
  } else {
    // Calls the function again if word1 is larger with the order switched
    return orderWords(word2, word1);
  }
}

// console.log(orderWords("aha", "amazing")); // Returns ['aha', 'amazing']
// console.log(orderWords("awesome", "how")); // Returns ['how', 'awesome']

//Create the function positiveDifference(a, b) which returns the positive difference between a and b.

function positiveDifference(a, b) {
  // Write your code here

  if (a - b > 0) {
    return a - b;
  } else {
    return positiveDifference(b, a);
  }
}

// console.log(positiveDifference(10, 3));

// console.log(positiveDifference(2, 6));

/** Coding Challenge
Directions: Complete the following Steps:

A function called sumAll(num) has been created. The function takes a value, num, and returns the sum of all numbers between 0 and num.

Complete the following:

Define a base case that returns 0 if num has a value of 0.
If the base case is false, define a recursive case that passes num - 1 to sumAll and adds this to the current value of num. Don’t forget to return this value!
Run your code
Test your code.
Example
sumAll(5); // returns 15 ==> 1 + 2 + 3 + 4 + 5
sumAll(3); // returns 6 ==> 1 + 2 + 3 
*/

function sumAll(num) {
  // Write your code here
  if (num === 0) {
    return 0;
  }
  return num + sumAll(num - 1);
}

// console.log(sumAll(3));
// console.log(sumAll(5));

// RECURSION WITH MULTIPLE STEPS

function combinations(n) {
  if (n === 1) {
    return ["a", "b"];
  } else {
    const tails = combinations(n - 1); //['a','b'] when n===1
    console.log(`N is: ${n} and Tails is : ${tails}.`);
    const answer = [];

    for (let i = 0; i < tails.length; i++) {
      answer.push("a" + tails[i]);
      answer.push("b" + tails[i]);
    }

    return answer;
  }
}

// console.log(combinations(1))
// console.log(combinations(2));
// console.log(combinations(3));

/* Coding Challenge
Directions: Complete the following Steps:

 

A function called factorial(num) has been created. The function takes a value, num, and returns the product of all numbers between 1 and num.

Complete the following:

Define a base case that returns 1 if num has a value of 1.
If the base case is false, define a recursive case that passes num - 1 to factorial and multiplies this with the current value of num. Don’t forget to return this value!
Run your code.
Test your code.*/

function factorial(num) {
  // write your code here
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

// console.log(factorial(5));

/** backwardString Coding Challenge 
Directions: Complete the activity below:

Write a function, backwardString, that receives a string as an argument.
backwardString should log every letter in the string, from the last character to the first. Use recursion.
NOTE: As with the last problem, the tests will check how many times console.log is called. */

function backwardString(str) {
  if (str.length === 1) {
    console.log(str[0]);
    return;
  }
  const lastChar = str[str.length - 1];
  console.log(lastChar);
  backwardString(str.slice(0, -1));
}

// console.log('fun'.slice(0, -1))

backwardString("fun");

/** countToTen Coding Challenge 
Directions: Complete the activity below:

Write a function, countToTen, that receives a number less than or equal to 10 as an argument.
countToTen should console.log every number between the given number and 10, including 10. Use recursion.
Important Note: The test for this function checks how many times you call console.log. If you use console.log for debugging purposes, that’s great! But your test will likely fail, so comment out unnecessary console.log’s when you want to see if you’re passing the test! */

function countToTen(num) {
  if (num === 10) {
    console.log(num);
    return;
  }

  console.log(num);

  countToTen(num + 1);
}

countToTen(8);

// DO NOT EDIT CODE BELOW

module.exports = {
  positiveDifference,
  sumAll,
  factorial,
  backwardString,
  countToTen,
};
