let button;
let firstParagraph;
let specialParagraph;
let secondListItem;
// DO NOT EDIT CODE ABOVE

// Write your code here
firstParagraph = document.querySelector("p");
// console.log(firstParagraph);
firstParagraph.innerHTML = "Hello world!";

specialParagraph = document.querySelector(".special");
specialParagraph.style.background = "yellow";

secondListItem = document.querySelector("li:nth-child(2)");
console.log(secondListItem);

secondListItem.innerHTML = "New item";

button = document.getElementById("btn");
button.addEventListener("click", function () {
  button.innerHTML = "Clicked!";
});

// // DO NOT EDIT CODE BELOW
module.exports = {
  button,
  firstParagraph,
  specialParagraph,
  secondListItem,
};
