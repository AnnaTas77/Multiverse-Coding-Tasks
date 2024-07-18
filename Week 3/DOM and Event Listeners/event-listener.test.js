// Running npm install for the JSDOM library
require("child_process").execSync("npm install");

// Grabbing the HTML doc in it's vanilla state
const path = require("path");
const htmlLocation = path.join(__dirname, "./event-listener.html");
const html = require("fs").readFileSync(htmlLocation);

// Creating a virtual DOM
const { JSDOM } = require("jsdom");
const dom = new JSDOM(html);

// Inserting the virtual DOM into the global so that the tests can run
global.window = dom.window;
global.document = dom.window.document;

// Normal unit test syntax can continue here
const { button } = require("./event-listener.js");

test("checks if button is stored", () => {
  expect(button.className).toBe("btn btn-primary");
  expect(button.innerHTML).toBe("Click Me");
});

// Normal unit test syntax can continue here
const { count } = require("./event-listener.js");

test("checks if count is stored", () => {
  expect(count).toBe(0);
});

test("checks if count is being console logged incremented", () => {
  const logSpy = jest.spyOn(console, "log");
  button.click();
  button.click();
  expect(logSpy).toHaveBeenCalledTimes(2);
  expect(logSpy).toHaveBeenCalledWith(2);
});
