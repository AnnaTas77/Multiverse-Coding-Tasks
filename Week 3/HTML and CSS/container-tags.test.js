const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
require("@testing-library/jest-dom");

const htmlFile = fs.readFileSync(
  path.resolve(__dirname, "./index.html"),
  "utf8"
);

const { window } = new JSDOM(htmlFile);
const { document } = window;

describe("HTML Integrity Checks", () => {
  it('should have 1 span with "blue" as content', () => {
    const spanArr = document.querySelectorAll("span");
    expect(spanArr.length).toBe(1);
    expect(spanArr[0].textContent).toBe("blue");
  });
  it("should have 1 div containing an ol", () => {
    const divArr = document.querySelectorAll("div");
    expect(divArr.length).toBe(1);
    const divChildren = divArr[0].children;
    expect(divChildren[0].tagName).toBe("OL");
  });
});
