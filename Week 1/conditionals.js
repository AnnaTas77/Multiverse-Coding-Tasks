let question1 = 92 > 32;
let question2 = 32 === "32" || 100 > 121;
let question3 = "happy";
let answer1;
let answer2;
let answer3;
// DO NOT EDIT CODE ABOVE

// Your Code Here

answer1 = true;
answer2 = false;

if (question3 === "happy") {
  answer3 = "I am happy";
} else if (question3 === "sad") {
  answer3 = "I am sad";
} else {
  answer3 = "I am neither happy nor sad";
}
console.log(answer3);

// if the id's match, the user should have access
// there is a bug here but I can't find it :(
// can you help?

const submittedUserId = "485912";

const storedUserId = 485912;

const hasAccess = storedUserId === Number(submittedUserId);

console.log(hasAccess);

/* badRating should be true if:
The userRating is less than 8 AND the userSpaceTime is greater than or equal to 1.
vip should be true if:
The userRating is equal to 10 OR the userSpaceTime is greater than 3.
sendEmail should be true if:
The userContact is true AND if userEmail is not null.
Run your code.
Test your code. */

let userRating = 7;
let userSpaceTime = 5;
let userContact = true;
let userEmail = null;
// DO NOT EDIT CODE ABOVE

// Write Your Code Here

let sendEmail;
let badRating;
let vip;

if (userRating < 8 && userSpaceTime >= 1) {
  badRating = true;
} else {
  badRating = false;
}

if (userRating == 10 || userSpaceTime > 3) {
  vip = true;
} else {
  vip = false;
}

if (userContact === true && userEmail !== null) {
  sendEmail = true;
} else {
  sendEmail = false;
}

console.log(badRating);
console.log(vip);
console.log(sendEmail);

let weather = "sunny";
weather = "rainy";

let myMood;

// YOUR CODE

if (weather === "sunny") {
  myMood = "happy";
} else if (weather !== "sunny") {
  myMood = "sad";
}

console.log(myMood);

/* FindersKeepers Coding Challenge 

Directions: Complete the following steps:   

Given a string variable, item, use a conditional statement to set the found variable to:
true if the item is equal to 'Penny'
true if the item is equal to 'Dime'
false if the item is any other value
Run your code. Try changing item to different values (by uncommenting lines 3-5 separately) and verify that found is set to the correct boolean in different scenarios!
Test your code. */

// let item = "Penny";
// let item = 'Dime';
let item = "Rock";
// let item = 'Paper';

let found;

// Write Your Code Here

if (item === "Penny") {
  found = true;
} else if (item === "Dime") {
  found = true;
} else {
  found = false;
}

console.log(found);

/* motivationIsKey Coding Challenge
Directions: Complete the following steps:

Given a string variable word, use a conditional statement to set the lastWord variable to:
The upper-cased string stored in word if the word starts with the letter m and has a length of 10.
The unmodified string stored in word if it is any other length or does not start with a m.
Run your code. Try changing word to different values (by uncommenting lines 3-7 separately) and verify that lastWord is set to the correct string in different scenarios!
Test your code. */

// let word = "bed";
// let word = 'bedazzling';
// let word = 'pizza';
// let word = 'pizzicatos';
let word = "mizzenmast";
// let word = 'motivation';

let lastWord;

// Write Your Code Here

if (word[0] === "m" && word.length === 10) {
  lastWord = word.toUpperCase();
} else {
  lastWord = word;
}

console.log(lastWord);

/*  FizzBuzz Coding Challenge

Directions: This party game is great fun in a group. The idea is you all stand in a circle, each member of the circle has to shout out incrementing numbers:

for example: “1” - “2” - “3” - “4” etc

The game has the following rules:

Swap out any number divisible by both 3 & 5 (like 15) with the word “FIZZBUZZ”.
Swap out any number divisible by 3 with the word “FIZZ”
Swap out any number divisible by 5 with the word “BUZZ”
Complete the following steps:

Given a number num and a variable solution, set the variable solution to:
“FIZZBUZZ” if the number is divisible by both 3 and 5
“FIZZ” if the number is divisible by 3
“BUZZ” if the number is divisible by 5
The number num itself if it is not divisible by 3, 5, or both.
Run your code.
Test your code.
 */

// let num = 5;
// num = 9;
// num = 14;
num = 45;

let solution;

// Write Your Code Here

if (num % 3 === 0 && num % 5 === 0) {
  solution = "FIZZBUZZ";
} else if (num % 3 === 0) {
  solution = "FIZZ";
} else if (num % 5 === 0) {
  solution = "BUZZ";
} else {
  solution = num;
}

console.log(solution);
