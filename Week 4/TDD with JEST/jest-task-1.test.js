const Page = require("./jest-task-1");
const { describe, it, test, expect } = require("@jest/globals");

// write your tests here

describe("Testing the Page class", () => {
  const myPage = new Page("Harry Potter", "This is chapter one.");

  it("Testing that the title property gets assigned properly", () => {
    expect(myPage.title).toBe("Harry Potter");
  });

  it("Testing that the content field gets assigned properly", () => {
    expect(myPage.content).toBe("This is chapter one.");
  });

  it("Testing that the wordCount() method calculates and returns the number of words in the content field", () => {
    expect(myPage.wordCount()).toBe(4);
  });
});
