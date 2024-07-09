const textEditor = require("./objects-workshop-task-1");

describe("textEditor", () => {
  it("has its original properties", () => {
    const document = ["H", "i", ",", " ", "W", "o", "r", "l", "d"];
    expect(textEditor.document).toEqual(document);
  });
});

describe("textEditor.addCharacter()", () => {
  it("is a function", () => {
    expect(typeof textEditor.addCharacter).toBe("function");
  });

  it("has one parameter", () => {
    expect(textEditor.addCharacter).toHaveLength(1);
  });

  it("uses the `this` keyword", () => {
    const editor = {
      document: ["o"],
    };

    // Calling the method on a separate object tests that the `this` keyword
    // was used.
    textEditor.addCharacter.call(editor, "k");
    expect(editor.document).toEqual(["o", "k"]);
  });

  it("returns a reference to `this`", () => {
    const editor = {
      document: ["h"],
    };

    // Calling the method on a separate object tests that it returns a reference
    // to `this`, not a hard-coded reference to `textEditor`.
    const returnValue = textEditor.addCharacter.call(editor, "i");
    expect(returnValue).toBe(editor);
  });

  it("adds a character to the end of the document", () => {
    // Creating a copy ensures that we don't mutate the original object when we
    // call the `.addCharacter()` method.
    const copy = {
      document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
    };

    textEditor.addCharacter.call(copy, "!");

    const document = ["H", "i", ",", " ", "W", "o", "r", "l", "d", "!"];
    expect(copy.document).toEqual(document);
  });
});
