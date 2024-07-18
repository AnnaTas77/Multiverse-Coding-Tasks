// Running npm install for the JSDOM library
require("child_process").execSync("npm install");

// Grabbing the HTML doc in it's vanilla state
const path = require("path");
const htmlLocation = path.join(__dirname, "./innerHTML.html");
const html = require("fs").readFileSync(htmlLocation);

// Creating a virtual DOM
const { JSDOM } = require("jsdom");
const dom = new JSDOM(html);

// Inserting the virtual DOM into the global so that the tests can run
global.window = dom.window;
global.document = dom.window.document;

// Normal unit test syntax can continue here
const { button } = require("./innerHTML.js");

test("checking button definition", () => {
  expect(button.innerHTML).toBe("Click Me");
  expect(button.className).toBe("btn btn-primary");
});

// Normal unit test syntax can continue here
const { output } = require("./innerHTML.js");

test("checking output definition", () => {
  expect(output.innerHTML).toBe("Current Count: 0");
  expect(output.id).toBe("counter");
});

// Normal unit test syntax can continue here
const { count } = require("./innerHTML.js");

test("checking count definition", () => {
  expect(count).toBe(0);
});

test("checking event listener logic", () => {
  button.click();
  expect(output.innerHTML).toBe("Current Count: 1");
  button.click();
  expect(output.innerHTML).toBe("Current Count: 2");
});
