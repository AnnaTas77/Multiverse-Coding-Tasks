const textEditor = require("./objects-workshop-task-3");

describe("textEditor", () => {
  it("has its original properties", () => {
    const document = ["H", "i", ",", " ", "W", "o", "r", "l", "d"];
    expect(textEditor.document).toEqual(document);
  });
});

describe("textEditor.characterCount()", () => {
  it("is a function", () => {
    expect(typeof textEditor.characterCount).toBe("function");
  });

  it("has no parameters", () => {
    expect(textEditor.characterCount).toHaveLength(0);
  });

  it("returns the number of characters in the document", () => {
    const count = textEditor.characterCount();
    expect(count).toBe(9);
  });

  it("uses the `this` keyword", () => {
    const editor = {
      document: ["w", "h", "a", "t", "'", "s", " ", "u", "p", "?"],
    };

    // Calling the method on a separate object with a different character count
    // tests that the `this` keyword was used.
    const count = textEditor.characterCount.call(editor);
    expect(count).toBe(10);
  });
});
