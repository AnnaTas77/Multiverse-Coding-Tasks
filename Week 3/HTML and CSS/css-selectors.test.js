const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
require("@testing-library/jest-dom");

const htmlFile = fs.readFileSync(
  path.resolve(__dirname, "./css-selectors.html"),
  "utf8"
);
const cssFile = fs.readFileSync(
  path.resolve(__dirname, "./css-selectors.css"),
  "utf8"
);

const { window } = new JSDOM(htmlFile);
const { document } = window;

const styleTag = document.createElement("style");
styleTag.textContent = cssFile;
document.head.appendChild(styleTag);

describe("HTML Checks", () => {
  it("indigo class should have 3 elements", () => {
    const indigoArr = document.querySelectorAll(".indigo");
    expect(indigoArr.length).toBe(3);
  });
  it("turquoise class should have 3 elements", () => {
    const turquoiseArr = document.querySelectorAll(".turquoise");
    expect(turquoiseArr.length).toBe(3);
  });
  it("big id should only be on one item", () => {
    const bigArr = document.querySelectorAll("#big");
    expect(bigArr.length).toBe(1);
  });
});

describe("CSS Checks", () => {
  it("h1 should have light sea green background color", () => {
    const h1 = document.querySelector("h1");
    expect(h1).toHaveStyle(`
            background-color: rgb(32, 178, 170);
        `);
  });
  it("turquoise class should have color turquoise", () => {
    const turquoise = document.querySelector(".turquoise");
    expect(turquoise).toHaveStyle(`
            color: rgb(64, 224, 208);
        `);
  });
  const indigo = document.querySelector(".indigo");
  it("indigo class should have color white", () => {
    expect(indigo).toHaveStyle(`
            color: rgb(255, 255, 255);
        `);
  });
  it("indigo class should have background color indigo", () => {
    expect(indigo).toHaveStyle(`
            background-color: rgb(75, 0, 130);
        `);
  });
  it("big id should have font size 40px", () => {
    const big = document.querySelector("#big");
    expect(big).toHaveStyle(`
            font-size: 40px;
        `);
  });
});
