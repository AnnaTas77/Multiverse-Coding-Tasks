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

describe("img checks", () => {
  const srcArr = ["mountains", "forest", "beach", "city"];
  const imgArr = document.querySelectorAll("img");
  it("img tags should have correct src", () => {
    imgArr.forEach((img, i) => {
      expect(img.src).toBe(`${srcArr[i]}.jpg`);
    });
  });
  it("img tags should have correct alt", () => {
    imgArr.forEach((img, i) => {
      let altText = srcArr[i].charAt(0).toUpperCase() + srcArr[i].slice(1);
      expect(img.alt).toBe(altText);
    });
  });
});

describe("anchor checks", () => {
  const hrefArr = [
    "https://www.theguardian.com/travel/2018/apr/14/20-lakes-and-mountains-holidays-in-europe-walking-hostels-watersports",
    "https://www.interrail.eu/en/magazine/interests/7-forests-europe-train#:~:text=1.,dramatic%20mountains%2C%20and%20quaint%20villages.",
    "https://www.lonelyplanet.com/articles/best-beaches-europe",
    "https://www.travelandleisure.com/worlds-best/the-best-cities-in-europe-2022",
  ];
  const anchorArr = document.querySelectorAll("a");
  it("should have correct href value", () => {
    anchorArr.forEach((anchor, i) => {
      expect(anchor.href).toBe(hrefArr[i]);
    });
  });
});
