const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
require("@testing-library/jest-dom");

const htmlFile = fs.readFileSync(
  path.resolve(__dirname, "./box-model.html"),
  "utf8"
);
const cssFile = fs.readFileSync(path.resolve(__dirname, "./style.css"), "utf8");

const { window } = new JSDOM(htmlFile);
const { document } = window;

const styleTag = document.createElement("style");
styleTag.textContent = cssFile;
document.head.appendChild(styleTag);

describe("CSS Checks", () => {
  const container = document.querySelector(".container");
  it("container class should contain 50% width", () => {
    expect(container).toHaveStyle(`
        width: 50%;
        `);
  });
  it("container class should contain 50px padding", () => {
    expect(container).toHaveStyle(`
        padding: 50px;
        `);
  });
  it("container class should contain 1em margin", () => {
    expect(container).toHaveStyle(`
        margin: 1em;
        `);
  });
  it("container class should contain 10px solid #59D9A1 border", () => {
    expect(container).toHaveStyle(`
        border: 10px solid #59D9A1;
        `);
  });
  it("container class should contain 10px 10px lightblue box-shadow", () => {
    expect(container).toHaveStyle(`
        box-shadow: 10px 10px lightblue;
        `);
  });
});
