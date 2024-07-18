// Running npm install for the JSDOM library
require("child_process").execSync("npm install");

// Grabbing the HTML doc in it's vanilla state
const path = require("path");
// Grabbing the HTML doc in it's vanilla state
// const html = require("fs").readFileSync("./index.html");
const htmlLocation = path.join(__dirname, "./index.html");
const html = require("fs").readFileSync(htmlLocation);

// Creating a virtual DOM
const { JSDOM } = require("jsdom");
const dom = new JSDOM(html);

// Inserting the virtual DOM into the global so that the tests can run
global.window = dom.window;
global.document = dom.window.document;

const {
  button,
  firstParagraph,
  specialParagraph,
  secondListItem,
} = require("./index.js");

test("checks if button is stored and initial values of paragraphs are correct", () => {
  expect(button.id).toBe("btn");
  expect(button.innerHTML).toBe("Click me");
  // Check first paragraph
  expect(firstParagraph.className).toBe("");
  expect(firstParagraph.innerHTML).toBe("This is a paragraph.");
  // Check special paragraph
  expect(specialParagraph.className).toBe("special");
  expect(specialParagraph.innerHTML).toBe("This is a special paragraph.");
  expect(specialParagraph.style.backgroundColor).toBe("");
  // Check second list item
  expect(secondListItem.innerHTML).toBe("Item 2");
});

test("checks if clicking the button updated the button to 'Clicked!'", () => {
  // Click button and verify that the
  button.click();
  expect(button.innerHTML).toBe("Clicked!");
});

test("checks if paragraph value changes", () => {
  expect(firstParagraph.innerHTML).toBe("Hello world!");
});

test("checks if paragraph value changes", () => {
  expect(specialParagraph.style.backgroundColor).toBe("yellow");
});

test("checks if paragraph value changes", () => {
  expect(secondListItem.innerHTML).toBe("New item");
});
