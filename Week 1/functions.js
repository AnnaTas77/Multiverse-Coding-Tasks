function sayHello() {
  return "Hey There";
}

function sayHelloTo(name) {
  return `Hello ${name}!`;
}

console.log(sayHello());
console.log(sayHelloTo("Sam"));

/* Directions: There is an error in our code. It seems that the scope of our variable bootcampCity does not allow us to access the value of bootcampCity outside our function such that it is exported correctly.

Edit the code so that the value of the variable bootcampCity is set to ’London’ and we can export and console.log the value without error
Run your code.
Test your code. */

let bootcampCity;

function setBootcampCity() {
  bootcampCity = "London";
}

/* TaxBracket Coding Challenge 
Directions: Complete the following steps:   

Declare a function, taxBand.
taxBand should take an annual salary of an employee as a parameter.
taxBand should return the take-home amount for that individual after-tax using the salary bands provided in the table below */

/* 
1. You'll get a salary like this: 25780
2. You'll have to figure what band that is in...
3. Then return the original amount with the right tax subtracted
 */

// Write your code here

function taxBand(salary) {
  if (salary > 0 && salary <= 9950) {
    return salary - salary * 0.1;
  } else if (salary >= 9951 && salary <= 40525) {
    return salary - salary * 0.2;
  } else if (salary >= 40526 && salary <= 86375) {
    return salary - salary * 0.22;
  } else if (salary >= 86376 && salary <= 164925) {
    return salary - salary * 0.24;
  } else if (salary >= 164926 && salary <= 209425) {
    return salary - salary * 0.32;
  }
}

console.log(taxBand(1000));
console.log(taxBand(50000));

/* Combining Functions Coding Challenge & Quiz
Directions: Complete the following steps:

Click “Run” on the code editor below.
If you are confused by the use of the MOD operator (%), #checkoutTheDocs 🔍
Create a function called division that divides two numbers. Call the function using the output of the plus function.
Complete the quiz on the following page. */

// *** Returning values function from previous video ***
function plus(a, b) {
  let result = a + b;
  return result;
}
let sum = plus(2, 3);
console.log("Sum: ", sum);

// *** Combining Functions ***
function multiply(a, b) {
  let result = a * b;
  return result;
}

const product = multiply(2, 3);
console.log("Product: ", product);

// Using one function output as a parameter for another function
console.log(
  "An example of one function using the output of another:",
  multiply(sum, plus(1, 2))
);

function isEven(x) {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Is 10 even?", isEven(10));
console.log("Is 9 even?", isEven(9));

let num = 10;
if (isEven(num)) {
  console.log(num + " is Even!");
} else {
  console.log(num + " is not Even!");
}

const division = (a, b) => {
  return a / b;
};

console.log("My division result: ", division(sum, 2));

/* iAmHungry Coding Challenge
Directions: There is a bug in our code! Let’s debug this problem until we can produce a valid solution!

The expected value of iAmHungry is false

 

Run the code to see the error.
Fix the bug.
Test your code. */

// YOUR CODE HERE

let haveFood = true;

// DO NOT EDIT BELOW

let iAmHungry = true;

if (haveFood) {
  iAmHungry = false;
} else {
  iAmHungry = true;
}

console.log(iAmHungry);

/*  startsWith Coding Challenge
Directions: 

Write a function, startsWith , which accepts a string word and a string letter as arguments.
startsWith should return the boolean true if the inputted string starts with the letter (either capital or lowercase). Otherwise, startsWith should return false.
Run your code.
Test your code.*/

function startsWith(word, letter) {
  if (word[0].toLowerCase() === letter.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(startsWith("Anna", "a"));
console.log(startsWith("Sam", "A"));
