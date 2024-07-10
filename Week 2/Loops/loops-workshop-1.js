/*Action Item: nameGreetings Coding Challenge 
Directions: Complete the following steps:   

 

The name tags should read "Hello my name is NAME" with the individuals name. Update the greet(arr) function to:
Iterate over the arr provided
Update with the greeting "Hello my name is NAME".
Return the original names array updated with the greetings.
Run your code.
Test your code.
 
Example
const names = ["Muhammad", "Sofia", "Juan", "Amira"];

greet(names);
/* Returns the array
[
    "Hello my name is Muhammad",
    "Hello my name is Sofia",
    "Hello my name is Juan",
    "Hello my name is Amira",
]
*/

// DO NOT EDIT BELOW
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
  // DO NOT EDIT ABOVE
  
  function greet(arr) {
    // Write your code here
    for(let i=0; i<arr.length; i++){
        arr[i] = `Hello my name is ${arr[i]}`
    }
    return arr
  }
  
  console.log(greet(names));
  
  
  
  // DO NOT EDIT CODE BELOW
  module.exports = {
    greet,
  };
  