const textEditor = require("./objects-workshop-task-2");

describe("textEditor", () => {
  it("has its original properties", () => {
    const document = ["H", "i", ",", " ", "W", "o", "r", "l", "d"];
    expect(textEditor.document).toEqual(document);
  });
});

describe("textEditor.backspace()", () => {
  it("is a function", () => {
    expect(typeof textEditor.backspace).toBe("function");
  });

  it("has no parameters", () => {
    expect(textEditor.backspace).toHaveLength(0);
  });

  it("uses the `this` keyword", () => {
    const editor = {
      document: ["a", "r", "r", "r", ",", " ", "m", "a", "t", "e", "y"],
    };

    // Calling the method on a separate object tests that the `this` keyword
    // was used.
    const removed = textEditor.backspace.call(editor);
    expect(removed).toBe("y");

    const edited = ["a", "r", "r", "r", ",", " ", "m", "a", "t", "e"];
    expect(editor.document).toEqual(edited);
  });

  it("removes the final character from the document and returns it", () => {
    // Creating a copy ensures that we don't mutate the original object when we
    // call the `.backspace()` method.
    const copy = {
      document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
    };

    const removed = textEditor.backspace.call(copy);
    expect(removed).toBe("d");

    const edited = ["H", "i", ",", " ", "W", "o", "r", "l"];
    expect(copy.document).toEqual(edited);
  });
});
