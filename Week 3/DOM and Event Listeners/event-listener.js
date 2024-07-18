// Write your code here
let button = document.querySelector(".btn-primary");

let count = 0;

button.addEventListener("click", function (event) {
  count += 1;
  console.log(count);
  return count;
});

// DO NOT EDIT CODE BELOW
module.exports = {
  button,
  count,
};
