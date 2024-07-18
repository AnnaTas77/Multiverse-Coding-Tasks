// Write your code here

let button = document.querySelector("button");

let output = document.querySelector("#counter");

let count = 0;

button.addEventListener("click", function () {
  count += 1;

  output.innerHTML = `Current Count: ${count}`;
});
// DO NOT EDIT CODE BELOW
module.exports = {
  button,
  output,
  count,
};
