/** letterCount Coding Challenge 
Directions: Complete the following steps:   

 

The company you have decided to order from sets the price on a per letter basis. Therefore you need to know how many of each letter, both upper and lower case, you need to order.

A letterCount function has been created. The letterCount function should:
Accept an array of names
Return an object containing the number of instances of each letter in the array.
DO NOT count spaces
Run your code.
Test your code.
Example
const names = ["Muhammad", "Sofia", "Juan", "Amira"];
letterCount(names);
returns

{
  A: 1,
  J: 1,
  M: 1,
  S: 1,
  a: 5,
  d: 1,
  f: 1,
  h: 1,
  i: 2,
  m: 3,
  n: 1,
  o: 1,
  r: 1
  u: 2,
}
*/

// DO NOT EDIT CODE
const names = [
  "Muhammad",
  "Sofia",
  "Juan",
  "Amira",
  "William",
  "Mei Ling",
  "Ahmed",
  "Emeka",
  "Elena",
  "Malik",
  "Fatima",
  "Carlos",
  "Priya",
  "Sofia",
  "Juan",
  "Jacob",
  "Aisha",
  "Santiago",
  "Yara",
  "Ethan",
  "Ananya",
  "Ryan",
  "Aisha",
  "Ahmed",
];
// DO NOT EDIT CODE ABOVE

function letterCount(arr) {
  // Write your code here
  const lettersObject = {};

  for (let i = 0; i < arr.length; i++) {
    const currentName = arr[i];
    //    console.log(currentName)
    for (let j = 0; j < currentName.length; j++) {
      const currentLetter = currentName[j];
      if (currentLetter === " ") {
        continue;
      }
      if (!Object.keys(lettersObject).includes(currentLetter)) {
        lettersObject[currentLetter] = 1;
      } else {
        lettersObject[currentLetter] += 1;
      }
    }
  }
  return lettersObject;
}

console.log(letterCount(names));

// DO NOT EDIT CODE BELOW
module.exports = {
  letterCount,
};
