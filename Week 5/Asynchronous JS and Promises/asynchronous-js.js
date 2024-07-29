const myStack = [];

function addPandas() {
  myStack.push("Pandas");
}

function addZebras() {
  myStack.push("Zebras");
}

function addLions() {
  myStack.push("Lions");
}

function updateStack() {
  // Add your code here

  addZebras();
  addLions();
  addPandas();
  addPandas();
  addLions();
  addZebras();
}

// DO NOT EDIT CODE BELOW
updateStack();
module.exports = {
  myStack,
};
