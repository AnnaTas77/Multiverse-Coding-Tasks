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
