// An array is a data structure that can hold more than one value by enclosing all values between []. The array can be referenced with a single variable.

//Array elements are accessed (i.e. read) by their index:

const myFirstArray = ["🎉", "❤️", "🦄"];
console.log(myFirstArray[0]); // Logs "🎉"
console.log(myFirstArray[1]); // Logs "❤️"
console.log(myFirstArray[2]); // Logs "🦄"

// Indices can also be used to reassign a position in an array to a new value:

myFirstArray[1] = "🥳";
console.log(myFirstArray); // Logs ["🎉", "🥳", "🦄"]

const dogNames = [
  "Buddy",
  "Max",
  "Charlie",
  "Bailey",
  "Lucy",
  "Daisy",
  "Rocky",
];

// DO NOT EDIT

// DO NOT EDIT
const outdoorActivities = [
  "Hiking",
  "Camping",
  "Fishing",
  "Kayaking",
  "Biking",
];

// DO NOT EDIT
const bands = [
  "Coldplay",
  "The Beatles",
  "Queen",
  "U2",
  "Radiohead",
  "The Rolling Stones",
  "Fleetwood Mac",
  "Green Day",
  "Oasis",
  "Led Zeppelin",
];

// Write your code here
let fifthDog = dogNames[4];
dogNames[5] = "Fido";
console.log(dogNames);

outdoorActivities.unshift("Swimming"); //adds to the beginning
outdoorActivities.push("Rock Climbing");

console.log(outdoorActivities);

bands.shift(); // removes from the beginning
bands.pop();

bands.splice(6, 1); // removes a specific element from an array
console.log(bands);

const fruits = ["strawberry", "banana", "mango"];
fruits[1] = "cherry";
console.log(fruits);

// DO NOT EDIT
const travelDestinations = [
  "Paris",
  "Tokyo",
  "Bali",
  "New York City",
  "Cape Town",
];

// DO NOT EDIT
let arrLen;

// Write your code here
travelDestinations.push("Cairo");
travelDestinations.unshift("Mexico City");
console.log(travelDestinations);

arrLen = travelDestinations.length;

console.log(arrLen);

//Key Points
//When an array is created, it inherits a number of methods that can be called to get information about the array and/or mutate values within the array.
//.pop() removes the LAST element from an array.

const names = ["Juan", "Emma", "Mehmet", "Sofia"];
names.pop();
console.log(names); // Logs ["Juan", "Emma", "Mehmet"]

//.shift() removes the FIRST element from an array.

names.shift();
console.log(names); // Logs ["Emma", "Mehmet", "Sofia"]

//.splice() removes a range of items from an array, optionally adding new items.
// The first parameter indicates the index to start at.
// The second parameter indicates the number of items to remove after that index.
// Any extra parameters indicate new items to be added in place.
const namesNew = ["Juan", "Emma", "Anna"];
namesNew.splice(1, 1, "Angela", "Sam");
console.log(namesNew); // Logs [ 'Juan', 'Angela', 'Sam', 'Anna' ]

//Remove "The Spice Girls" and "JLS" from popGroups.

const popGroups = [
  "Little Mix",
  "One Direction",
  "The Spice Girls",
  "JLS",
  "Girls Aloud",
];

popGroups.splice(2, 2);
console.log(popGroups);

/** Define a fullName() function with a single parameter: names. The value of this parameter will be an array of two names in the wrong order (surname first).
Implement the body of the function so that it returns, as a string, the full name in the correct order. Do not modify the array. */
// Write your code here

function fullName(names) {
  return names[1] + " " + names[0];
}

console.log(fullName(["Tasheva", "Anna"]));

/** Add "Go" to the beginning of programmingLanguages.
Add "TypeScript" to the end of programmingLanguages.
Reassign arrLen to the length of programmingLanguages after completing the two previous problems. */

// DO NOT EDIT
const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "PHP",
  "Ruby",
  "Swift",
  "Kotlin",
  "Rust",
];

// DO NOT EDIT
let arrLength;

// Write your code here

programmingLanguages.unshift("Go");
programmingLanguages.push("TypeScript");

console.log(programmingLanguages);

arrLength = programmingLanguages.length;
console.log(arrLength);

/**  Swap Elements Coding Challenge 
Directions: 

Define a swapElements() function with three parameters: arr, i, and j. The values of these parameters will be an array and two indices.
Implement the body of the function so that it swaps the positions of arr[i] and arr[j] and returns the modified array. */

// Write your code here

function swapElements(arr, i, j) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;

  return arr;
}

const letters = ["a", "b", "c", "d", "e"];
const swapped = swapElements(letters, 1, 3); // ["a", "d", "c", "b", "e" ]

console.log(swapped);

/* Rotate Array Coding Challenge 
Directions: Complete the following steps:   

Define a rotateArray() function with two parameters: arr and direction. The values of these parameters will be an array and the string "left" or "right".
Implement the body of the function so that, based on the value of direction, it does one of the following. In both cases, your function should return the modified array.
If the direction is "left", remove the first element from the array and add it to the end of the array.
If the direction is "right", remove the last element from the array and add it to the beginning of the array.
*/

// Write your code here

function rotateArray(arr, direction) {
  if (direction === "left") {
    const shiftedEl = arr.shift();
    arr.push(shiftedEl);
    return arr;
  }
  if (direction === "right") {
    const poppedEl = arr.pop();
    arr.unshift(poppedEl);
    return arr;
  }
}

console.log(rotateArray([5, 6, 7], "left"));
console.log(rotateArray([1, 2, 3], "right"));

/** Easy Delete Coding Challenge 
Directions: The .splice() method is great, but sometimes you just want to remove the data at index i without remembering its syntax. Let's write a helper function for this.

Define an easyDelete() function with two parameters: arr and i. The values of these parameters will be an array and an index.
Implement the body of the function so that it removes arr[i] and returns the modified array. */

// Write your code here
function easyDelete(arr, i) {
  arr.splice(i, 1);
  return arr;
}

console.log(easyDelete(["a", "b", "c", "d"], 2));
