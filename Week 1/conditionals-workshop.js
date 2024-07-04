//WORKSHOP TASKS

/* trafficLight
Your task is to simulate the design of a traffic light using Javascript. 🚦

📝
We have declared three variables, green, yellow, and red (all booleans).

Declare a new variable, response.
Given the current values of these variables, create a conditional statement (if, else if, and else) that will set response to a string based on how a traffic light works:
If the light is green (i.e. green has the value of true), set response to Go!
If the light is yellow, set response to Slow Down!
If the light is red, set response to Stop!
If none of the lights are on (none are true), the the traffic light is broken! Set response to Traffic light is broken!
NOTE: Yes, it’s possible to “cheat” and just say const response = <whatever it should be>, but you’re only cheating yourself if you do that. Write the conditional for the practice!

Run your code.
Test your code. */

let green = false;
let yellow = true;
let red = false;
// DO NOT EDIT ABOVE

//Your code below

let response;

if (green) {
  response = "Go!";
} else if (yellow) {
  response = "Slow Down!";
} else if (red) {
  response = "Stop!";
} else {
  response = "Traffic light is broken!";
}

console.log(response);

/* pos neg zero
Your task is to create a conditional statement that can check whether a number is:

Zero
Positive
Negative
 

Directions 📝
Declare a variable called sign.
Given the value of num (a number), and set the value of sign to a string based on the following:
If the value of num is zero, set sign to None
If the value of num is positive, set sign to Positive
If the value of num is negative, set sign to Negative
Run your code.
Test your code. */
//let num = 0
//let num = -9
let num = 4;
// DO NOT EDIT ABOVE

//Your code below

let sign;

if (num === 0) {
  sign = "None";
} else if (num > 0) {
  sign = "Positive";
} else if (num < 0) {
  sign = "Negative";
}

console.log(sign);

/* testGrades
TASK: Design a script that will automatically determine a student’s letter grade based on their percentage score.

Directions 📝
Declare a new variable letterGrade.
Given the value of percentage (a number), set letterGrade to the correct string, based on the following:
If the student scores less than a 65, then the letterGrade is set to F.
If the student scores 65 or above, but below 75, then the letterGrade is set to D
If the student scores 75 or above, but below 80, then letterGrade is set to C
If the student scores 80 or above, but below 90, then letterGrade is set to B
If the student scores 90 or above, then letterGrade is set to A
Run your code.
Test your code. */

const percentage = 75;
// DO NOT EDIT CODE ABOVE

// Write Your Code Here

let letterGrade;

if (percentage < 65) {
  letterGrade = "F";
} else if (percentage >= 65 && percentage < 75) {
  letterGrade = "D";
} else if (percentage >= 75 && percentage < 80) {
  letterGrade = "C";
} else if (percentage >= 80 && percentage < 90) {
  letterGrade = "B";
} else if (percentage >= 90) {
  letterGrade = "A";
}

console.log(letterGrade);
