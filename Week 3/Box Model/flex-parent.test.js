// Installing and requiring the postcss module
require("child_process").execSync("npm install");
const postcss = require("postcss");

// Reading and parsing the css file to be navigated later
const { readFileSync } = require("fs");
const path = require("path");
const cssLocation = path.join(__dirname, "./flex-parent.css");
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
const justifyValue = container.nodes.find(
  (node) => node.prop === "justify-content"
).value;

test("display should have a value of flex", () => {
  expect(justifyValue).toBe("space-around");
});

// Finding the display property and storing the value
const alignValue = container.nodes.find(
  (node) => node.prop === "align-items"
).value;

test("display should have a value of flex", () => {
  expect(alignValue).toBe("center");
});

// Finding the display property and storing the value
const wrapValue = container.nodes.find(
  (node) => node.prop === "flex-wrap"
).value;

test("display should have a value of flex", () => {
  expect(wrapValue).toBe("wrap");
});
