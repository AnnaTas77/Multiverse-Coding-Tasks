/* Copying an array
To complete these challenges, you need to know how to create a copy of an array. There are several ways to do this. Because we've already covered the .slice() method, we'll use that. If you call it without any arguments, it will return a shallow copy of the entire array.
*/

const fruits = ["apple", "banana", "cherry"];
const copy = fruits.slice();

console.log(copy); // Logs ["apple", "banana", "cherry"]
console.log(fruits === copy); // Logs false (because they are separate arrays)

/* Shallow copies versus deep copies
The reason why you need to create copies for these exercises is because otherwise, each element in textEditor.history would actually be a reference to textEditor.document. Changes to one array would affect all of them, because it would really just be one array. This is a bit like if a person has a nickname. Both names refer to the same person. The nickname doesn't refer to a clone of that person!

 
However, there is a difference between shallow copies and deep copies. It doesn't matter for these exercises because textEditor.document is assigned to an array of strings, which are primitive values (not objects). It matters when dealing with nested objects (and arrays, which are technically a type of object).


Consider the following code. The nested array is not cloned. Rather, a reference to the same array is created. This means that changes to one array affect the other, because it really is just one array in memory! */

const avenger1 = {
  name: "Captain America",
  team: ["Black Widow", "Hawkeye", "Hulk", "Iron Man", "Thor"],
};

// Creates a shallow copy.
const copy1 = { ...avenger1 };

// Logs true because they are REFERENCES to the same array, not copies.
console.log(avenger1.team === copy1.team);

// Let's remove Thor because he's currently in Asgard.
copy1.team.pop();

// Oops, "both" arrays are affected because it's actually the same array!
console.log(avenger1.team); // ["Black Widow", "Hawkeye", "Hulk", "Iron Man"]
console.log(copy1.team); // ["Black Widow", "Hawkeye", "Hulk", "Iron Man"]

//If this is not the desired behaviour, you need to create a deep copy. This used to require a recursive function, but fortunately the new structuredClone() global function makes it easier.

const avenger2 = {
  name: "Captain America",
  team: ["Black Widow", "Hawkeye", "Hulk", "Iron Man", "Thor"],
};

// Creates a deep copy.
const copy2 = structuredClone(avenger2);

// Logs false because they are SEPARATE arrays.
console.log(avenger2.team === copy2.team);

// Let's remove Thor because he's currently in Asgard.
copy2.team.pop();

// Yay, only the copy2 is affected!
console.log(avenger2.team); // ["Black Widow", "Hawkeye", "Hulk", "Iron Man", "Thor"]
console.log(copy2.team); // ["Black Widow", "Hawkeye", "Hulk", "Iron Man"]
