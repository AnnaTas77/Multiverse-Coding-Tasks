const textEditor = require("./objects-workshop-task-4");

describe("textEditor", () => {
  it("has its original properties", () => {
    expect(textEditor).toMatchObject({
      document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
      history: [],
    });
  });
});

describe("textEditor.save()", () => {
  it("is a function", () => {
    expect(typeof textEditor.save).toBe("function");
  });

  it("has no parameters", () => {
    expect(textEditor.save).toHaveLength(0);
  });

  it("uses the `this` keyword", () => {
    const editor = {
      document: ["h"],
      history: [["h"]],
      addCharacter(char) {
        // Obfuscated to avoid giving away the solution to a previous challenge.
        // prettier-ignore
        this.
          \u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074.
          \u0070\u0075\u0073\u0068(char);
        return this;
      },
    };

    editor.addCharacter("i").addCharacter("!");

    // Calling the method on a separate object tests that the `this` keyword
    // was used.
    textEditor.save.call(editor);
    expect(editor.history).toEqual([["h"], ["h", "i", "!"]]);
    expect(editor.history[1]).not.toBe(editor.document);
  });

  it("saves the document to the history array", () => {
    // Creating a copy ensures that we don't mutate the original object when we
    // call the `.save()` method.
    const copy = {
      document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
      history: [],
    };

    textEditor.save.call(copy);

    expect(copy.history).toEqual([
      ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
    ]);

    expect(copy.history[0]).not.toBe(copy.document);
  });

  it("returns a reference to `this`", () => {
    const editor = {
      document: ["H", "i", " ", "t", "h", "e", "r", "e"],
      history: [],
    };

    // Calling the method on a separate object tests that it returns a reference
    // to `this`, not a hard-coded reference to `textEditor`.
    const returnValue = textEditor.save.call(editor);
    expect(returnValue).toBe(editor);
  });
});

describe("textEditor.restore()", () => {
  it("is a function", () => {
    expect(typeof textEditor.restore).toBe("function");
  });

  it("has one parameter", () => {
    expect(textEditor.restore).toHaveLength(1);
  });

  it("uses the `this` keyword", () => {
    const editor = {
      document: ["h", "e", "l", "l", "o", " ", "t", "h", "e", "r", "e"],
      history: [
        ["h", "e", "l", "l", "o"],
        ["h", "e", "l", "l", "o", " ", "t", "h", "e", "r", "e"],
      ],
    };

    // Calling the method on a separate object tests that the `this` keyword
    // was used.
    textEditor.restore.call(editor, 0);

    expect(editor.document).toEqual(["h", "e", "l", "l", "o"]);

    expect(editor.history).toEqual([
      ["h", "e", "l", "l", "o"],
      ["h", "e", "l", "l", "o", " ", "t", "h", "e", "r", "e"],
    ]);

    expect(editor.document).not.toBe(editor.history[0]);
  });

  it("restores the document at the specified index", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.restore()` method.
    const editor = {
      document: ["d"],
      history: [["a"], ["b"], ["c"]],
    };

    textEditor.restore.call(editor, 1);

    expect(editor.document).toEqual(["b"]);
    expect(editor.history).toEqual([["a"], ["b"], ["c"]]);
    expect(editor.document).not.toBe(editor.history[1]);
  });

  it("returns a reference to `this`", () => {
    const editor = {
      document: ["H", "i", " ", "t", "h", "e", "r", "e"],
      history: [["H", "i"]],
    };

    // Calling the method on a separate object tests that it returns a reference
    // to `this`, not a hard-coded reference to `textEditor`.
    const returnValue = textEditor.restore.call(editor, 0);
    expect(returnValue).toBe(editor);
  });
});
