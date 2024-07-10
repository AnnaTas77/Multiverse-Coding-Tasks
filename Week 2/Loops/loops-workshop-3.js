/** namesObj Coding Challenge 
Directions: Complete the following steps:   

 

Knowing the number of duplicated names actually isn’t as useful as we thought it would be. Your boss would like a list of names with an indication of how many name tags we need for each name.

Update the namesObj function to:
Initialize an empty object
Iterate through an array of names, arr.
If the name is not currently in the object, create a key with the value of the name and se the value to 1.
If the name is currently in the object, increase the count for that name by 1.
Return an object with the number of name tags you need for each name.
Run your code.
Test your code.
Example
const names = ["Muhammad", "Sofia", "Juan", "Amira", "William", "Mei Ling", "Ahmed", "Emeka", "Elena", "Malik", "Fatima", "Carlos", "Priya", "Sofia", "Juan", "Jacob", "Aisha", "Santiago", "Yara", "Ethan", "Ananya", "Ryan", "Aisha", "Ahmed"];

namesObj(names);
returns

{
  Muhammad: 1,
  Sofia: 2,
  Juan: 2,
  Amira: 1,
  William: 1,
  'Mei Ling': 1,
  Ahmed: 2,
  Emeka: 1,
  Elena: 1,
  Malik: 1,
  Fatima: 1,
  Carlos: 1,
  Priya: 1,
  Jacob: 1,
  Aisha: 2,
  Santiago: 1,
  Yara: 1,
  Ethan: 1,
  Ananya: 1,
  Ryan: 1
} */

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

function namesObj(arr) {
  // Write your code here
  const myNamesObject = {};

  for (let i = 0; i < arr.length; i++) {
    const currentName = arr[i];
    if (!Object.keys(myNamesObject).includes(currentName)) {
      myNamesObject[currentName] = 1;
    } else {
      myNamesObject[currentName] += 1;
    }
  }
  // console.log(Object.keys(myNamesObject));
  return myNamesObject;
}

console.log(namesObj(names));

// DO NOT EDIT CODE BELOW
module.exports = {
  namesObj,
};
