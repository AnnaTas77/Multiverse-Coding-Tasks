/* dogAgeCalculator
📝
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:

Takes 1 argument: your dog’s age.
Calculates your dog’s age based on the conversion rate of:
1 human year to 7 dog years.
Return a string describing your dog’s age (see below).
Run your code.
Test your code. */

function calculateDogAge(dogAge) {
  let inDogYears = dogAge * 7;
  return `Your Dog is ${inDogYears} years old in Dog Years!`;
}

console.log(calculateDogAge(7));

/* passingAverage
📝
Declare a function named passingAverage that will take 4 numbers as parameters.
Your function is to do the following:
Add the 4 numbers passed in and divide by 4.
If the number is above a 90, return “You all passed with flying colors!”
If the number is below or equal to 90 but above an 80, return “You all passed, good job!”
If the number is below or equal to an 80 but above a 70, return “You all passed”
If the number is below or equal a 70 but above a 64, return “You barely made it”
In any other case, return “You failed!”
Run your code.
Test your code. */

function passingAverage(a, b, c, d) {
  let result = (a + b + c + d) / 4;

  //  console.log(result)

  if (result > 90) {
    return "You all passed with flying colors!";
  } else if (result <= 90 && result > 80) {
    return "You all passed, good job!";
  } else if (result <= 80 && result > 70) {
    return "You all passed";
  } else if (result <= 70 && result > 64) {
    return "You barely made it";
  } else {
    return "You failed!";
  }
}

console.log(passingAverage(4, 4, 5, 5));

/* yardsToInches
📝
Declare a function named yards2Inches that will take a number of yards as input.
Your function is to do the following:
Convert the yards to inches
NOTE: 1 yard = 36 inches
Return a string that says “Given XX yard(s), you have YY inches”
Run your code.
Test your code. */

// Write your code here

function yards2Inches(numOfYards) {
  let inches = numOfYards * 36;

  return `Given ${numOfYards} yard(s), you have ${inches} inches`;
}

console.log(yards2Inches(5));

/* evenOrOdd
📝
Write a function named evenOrOdd that will a number as input
Your evenOrOdd function will check the value of the number passed in and do the following:
If the number is even, return the String: "Your number XX is even".
If the number is odd, return the String: "Your number XX is odd".
Run your code.
Test your code.*/

const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return `Your number ${num} is even`;
  } else {
    return `Your number ${num} is odd`;
  }
};

console.log(evenOrOdd(6));
console.log(evenOrOdd(9));

/* CeltoFahr
📝
Declare a function named c2F that will take in a Celsius number value as input
c2F should return the equivalent Fahrenheit value. Your return value should be a number.
The formula for Celsius to Fahrenheit is the Celsius value multiplied by 9, divided by 5, plus 32.
Run your code.
Test your code. */

function c2F(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(c2F(20));

/* sameLengthStrings
📝
Declare a function sameLenStr that will take 4 string parameters.
Your sameLenStr function is to do the following:
If the number of characters in the first and third input string is equal to the number of characters in the second and fourth input string, return true
Return false in any other case
Run your code.
Test your code. */

function sameLenStr(str1, str2, str3, str4) {
  let sum1 = str1.length + str3.length;
  let sum2 = str2.length + str4.length;

  if (sum1 === sum2) {
    return true;
  } else {
    return false;
  }
}

console.log(sameLenStr("Anna", "cloud", "dog", "hi"));

/* multipleOfSum
📝
Declare a function named sumMultiple that takes 3 numbers as parameters.
sumMultiple should do the following:
Return true if the third number is a multiple of the sum of the first two numbers.
Return false if the third number is not a multiple of the sum of the first two numbers.
The % operator will be very helpful here!
Run your code.
Test your code. */

function sumMultiple(num1, num2, num3) {
  let sum = num1 + num2;

  if (num3 % sum === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(sumMultiple(1, 2, 6));

console.log(sumMultiple(1, 2, 15));

console.log(sumMultiple(1, 2, 10));

// Complete the function random5 so it returns a random integer equal to either 1, 2, 3, 4 or 5.

const random5 = () => {
  const randomNum = Math.random() * 5 + 1;
  const result = Math.floor(randomNum);
  return result;
};

console.log(random5());
console.log(random5());
console.log(random5());
console.log(random5());
console.log(random5());
console.log(random5());
console.log(random5());
