/** duplicateNames Coding Challenge 
Directions: Complete the following steps:   

 

Some people in the company share the same name. We need to figure out how many duplicated names are in our array of names.

A duplicateNames function accepts an array, arr, of names. The function should:
Iterate through the array to see if the name has been duplicated.
Return the count of duplicated names in the array
If there are no duplicates, then 0 should be returned.
Run your code.
Test your code.
Example
const names = ["Muhammad", "Sofia", "Juan", "Amira", "William", "Mei Ling", "Ahmed", "Emeka", "Elena", "Malik", "Fatima", "Carlos", "Priya", "Sofia", "Juan", "Jacob", "Aisha", "Santiago", "Yara", "Ethan", "Ananya", "Ryan", "Aisha", "Ahmed"];

duplicateNames(names); // Returns 4 */

// DO NOT EDIT
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

function duplicateNames(arr) {
  // Write your code here
  let count = 0;

  const arrayWithoutDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    let currentName = arr[i];
    if (!arrayWithoutDuplicates.includes(currentName)) {
      arrayWithoutDuplicates.push(currentName);
    } else {
      count++;
    }
  }
  return count;
}

console.log(duplicateNames(names));
// FDO NOT EDIT CODE BELOW
module.exports = {
  duplicateNames,
};
