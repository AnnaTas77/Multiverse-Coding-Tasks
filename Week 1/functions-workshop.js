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

// const random5 = () => {
//   const randomNum = Math.random() * 5 + 1;
//   const result = Math.floor(randomNum);
//   return result;
// };

// console.log(random5());
// console.log(random5());
// console.log(random5());
// console.log(random5());
// console.log(random5());
// console.log(random5());
// console.log(random5());

/** Declare a function, gross2Net() that receives a number grossPay and returns the netPay after deducting Federal and State taxes:
General Tax, equal to 25% of your “Gross Pay”
State Tax, equal to 7% of your “Gross Pay”
Your function should return the number of the “Net Pay” amount after deducting your taxes. */

function gross2Net(grossPay) {
  const generalTax = grossPay * 0.25;
  const stateTax = grossPay * 0.07;
  const netPay = grossPay - generalTax - stateTax;
  return netPay;
}
console.log(gross2Net(100000));

/** Declare a function called maxOfThree that accepts three number arguments.
maxOfThree should return largest number of the three.*/

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

console.log(maxOfThree(1, 10, -12));

/** Declare a function everyWhichWay that accepts three number arguments.
everyWhichWay should return the following:
Return 'sum' if the sum of the first two numbers equals the third
Return 'difference' if the first number minus the second equals the third
Return 'product' if the product of the first two numbers equals the third
Return 'fraction' if the first number divided by the second equals the third
Return null if none of the above are true */

const everyWhichWay = (num1, num2, num3) => {
  if (num1 + num2 === num3) {
    return "sum";
  } else if (num1 - num2 === num3) {
    return "difference";
  } else if (num1 * num2 === num3) {
    return "product";
  } else if (num1 / num2 === num3) {
    return "fraction";
  } else {
    return null;
  }
};

console.log(everyWhichWay(1, 2, 3));

/** Write a function named milesToKM that will take a number of miles as input
milesToKM returns a string that matches the template:
"XX miles is equal to YY kilometers!" */

const milesToKM = (miles) => {
  const km = miles * 1.60934;
  return `${miles} miles is equal to ${km} kilometers!`;
};

console.log(milesToKM(90));
console.log(milesToKM(60));

/** Write a function named isMultiple that will take two inputs.
isMultiple should return a boolean based on the following conditions:
true if the second input value is a multiple of the first input value
false if the second input value is not a multiple of the first input value. */

const isMultiple = (input1, input2) => {
  if (input2 % input1 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isMultiple(10, 100));

/* Write a function called sumOfChars that will take two strings as parameters.
sumOfChars will count the number of characters in each string, and return the sum of the number of characters of both inputs. */

const sumOfChars = (str1, str2) => {
  const sum = str1.length + str2.length;
  return sum;
};

console.log(sumOfChars("Hello", "World!"));

/** Declare a function named evenOrOdd2 that will take two strings as parameters.
Your function will add the total number of characters of both strings, and:
If there are an even number of characters, then return the string “There are an even number of characters.”
If there are an odd number of characters return the string “There are an odd number of characters.” */

const evenOrOdd2 = (str1, str2) => {
  const sum = str1.length + str2.length;

  if (sum % 2 === 0) {
    return "There are an even number of characters.";
  } else {
    return "There are an odd number of characters.";
  }
};

console.log(evenOrOdd2("What's", "Up"));
