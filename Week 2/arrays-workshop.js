/** 2D Arrays Read Update Coding Challenge 
Directions: Complete the following steps:   

Assign to bootcampData the value of row two, column two in array2D.

Using bracket notation, reassign row one, column two of array2D to true. */

const array2D = [
  [true, false],
  ["Bootcamp", "Multiverse"],
];

// DO NOT EDIT
let bootcampData;

// Write your code here

bootcampData = array2D[1][1];
array2D[0][1] = true;

// console.table(array2D);
// console.log(array2D);

// DO NOT EDIT
module.exports = {
  array2D,
  bootcampData,
};

/**  editValue Coding Challenge 
Directions: An accounts spreadsheet has been created in the editor for you already. It contains some financial data for your company.

Define a function editValue(sheet, i, j, newVal) that sets the value in sheet at row i and column j to newVal and returns the modified sheet.*/

// DO NOT EDIT
const accounts = [
  ["client", "invoice", "discount", "payable", "paid"],
  ["ace footwear", 10200, 0.1, 9180, false],
  ["bling.com", 4000, 0.05, null, true],
  ["chasm", 20000, 0.15, 17000, true],
];

// Write your code here

const editValue = (sheet, i, j, newVal) => {
  sheet[i][j] = newVal;
  return sheet;
};

// DO NOT EDIT
module.exports = {
  accounts,
  editValue,
};

/** Define a function copyPasteCell(sheet, i, j, k, l) that copies the value stored in row i, column j and pastes (replaces) it into row k, column l. Return the modified array.
Test your code! Once all tests are passing, move on to the next page.
Example
const letters = [
  ["a", "b"],
  ["c", "d"],
];

copyPasteCell(letters, 0, 0, 1, 1); // Returns [["a", "b"], ["c", "a"]] */

// const accounts = [
//   ["client", "invoice", "discount", "payable", "paid"],
//   ["ace footwear", 10200, 0.1, 9180, false],
//   ["bling.com", 4000, 0.05, null, true],
//   ["chasm", 20000, 0.15, 17000, true],
// ];

// Write your code here

function copyPasteCell(sheet, i, j, k, l) {
  const copiedVal = sheet[i][j];

  sheet[k][l] = copiedVal;
  return sheet;
}

// console.log(copyPasteCell(accounts2,0,0,1,0))

// DO NOT EDIT
module.exports = {
  accounts,
  copyPasteCell,
};

/** Add Row Coding Challenge 
Directions: Complete the following steps:

Define a function addRow(sheet, data) that adds new data to the end of the sheet. Return the modified array.
Test your code! Once all tests are passing, move on to the next page.
Example
const letters = [
  ["a", "b"],
  ["c", "d"],
];

addRow(letters, ["e", "f"]); // Returns [["a", "b"], ["c", "d"], ["e", "f"]] */

// DO NOT EDIT
// const accounts = [
//   ["client", "invoice", "discount", "payable", "paid"],
//   ["ace footwear", 10200, 0.1, 9180, false],
//   ["bling.com", 4000, 0.05, null, true],
//   ["chasm", 20000, 0.15, 17000, true],
// ];

// Write your code here

function addRow(sheet, data) {
  sheet.push(data);
  return sheet;
}

const letters = [
  ["a", "b"],
  ["c", "d"],
];

console.log(addRow(letters, ["e", "f"]));

// DO NOT EDIT
module.exports = {
  accounts,
  addRow,
};

/** Invention Test Coding Challenge
Directions:  What else can you do with a spreadsheet? Here are a few challenges to try out:

Define a function cutPasteCell(sheet, i, j, k, l) that cuts the value stored in row i, column j (leaving null in its place) and pastes it into row k, column l. Return the modified array.
Define a function insertRow(sheet, i, row) that inserts a new row at position i. Return the modified array.
Define a function copyPasteRow(sheet, i, j) that copies the row at position i and pastes it into position j. Be sure to create a copy of the row at position i, i.e. not a reference to the same row in memory. Return the modified array.
Define a function reverseRows(sheet) that reverses the order of the rows. Return the modified array.
Test your code!
If you've completed all of these, be inventive and come up with some of your own functions!

Examples
cutPasteCell()
const letters = [
  ["a", "b"],
  ["c", "d"],
];

cutPasteCell(letters, 0, 0, 1, 1); // Returns [[null, "b"], ["c", "a"]]
insertRow()
 const letters = [
  ["a", "b"],
  ["c", "d"],
];

insertRow(letters, 1, ["e", "f"]); // Returns [["a", "b"], ["e", "f"], ["c", "d"]]
copyPasteRow()
In the returned array, note that although the nested arrays have the same structure, they should be separate arrays in memory. You'll need to look up how to create a copy of an array. See object references.

const letters = [
  ["a", "b"],
  ["c", "d"],
];

copyPasteRow(letters, 0, 1); // Returns [["a", "b"], ["a", "b"]]
letters[0] === letters[1]; // false
reverseRows()
Hint: There is a built-in array method you can use for this!

const letters = [
  ["a", "b"],
  ["c", "d"],
];

reverseRows(letters); // Returns [["c", "d"], ["a", "b"]] */

// DO NOT EDIT
// const accounts = [
//   ["client", "invoice", "discount", "payable", "paid"],
//   ["ace footwear", 10200, 0.1, 9180, false],
//   ["bling.com", 4000, 0.05, null, true],
//   ["chasm", 20000, 0.15, 17000, true],
// ];

function cutPasteCell(sheet, i, j, k, l) {
  const cutValue = sheet[i][j];
  console.log("cutValue: ", cutValue);
  sheet[i][j] = null;
  sheet[k][l] = cutValue;
  return sheet;
}

const letters3 = [
  ["a", "b"],
  ["c", "d"],
];

console.log("copyPasteCell: ", cutPasteCell(letters3, 0, 0, 1, 1)); // Returns [[null, "b"], ["c", "a"]]

function insertRow(sheet, i, row) {
  sheet.splice(i, 0, row);
  return sheet;
}

const letters4 = [
  ["a", "b"],
  ["c", "d"],
];

console.log("insertRow: ", insertRow(letters4, 1, ["e", "f"])); // Returns [["a", "b"], ["e", "f"], ["c", "d"]]

function copyPasteRow(sheet, i, j) {
  const copiedRow = [...sheet[i]]; //deep copy
  sheet[j] = copiedRow;
  return sheet;
}

const letters5 = [
  ["a", "b"],
  ["c", "d"],
];

console.log("copyPasteRow: ", copyPasteRow(letters5, 0, 1)); // Returns [["a", "b"], ["a", "b"]]
console.log(letters5[0] === letters5[1]); // true

function reverseRows(sheet) {
  return sheet.reverse();
}

const letters6 = [
  ["a", "b"],
  ["c", "d"],
];

console.log("reverseRows: ", reverseRows(letters6)); // Returns [["c", "d"], ["a", "b"]]

// DO NOT EDIT
module.exports = {
  accounts,
  copyPasteRow,
  cutPasteCell,
  insertRow,
  reverseRows,
};
