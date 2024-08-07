// Installing and requiring the postcss module
require("child_process").execSync("npm install");
const postcss = require("postcss");

// Reading and parsing the css file to be navigated later
const { readFileSync } = require("fs");
const path = require("path");
const cssLocation = path.join(__dirname, "./flex-box.css");
const css = postcss.parse(readFileSync(cssLocation));

// Finding the container selector
const container = css.nodes.find((node) => node.selector === ".container");

// Finding the display property and storing the value
const displayValue = container.nodes.find(
  (node) => node.prop === "display"
).value;

test("display should have a value of flex", () => {
  expect(displayValue).toBe("flex");
});

// Finding the display property and storing the value
const directionValue = container.nodes.find(
  (node) => node.prop === "flex-direction"
).value;

test("flex-direction should be row-reverse", () => {
  expect(directionValue).toBe("row-reverse");
});
