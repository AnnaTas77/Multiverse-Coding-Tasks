//TASK 1

const { array2D, bootcampData } = require("./arrays-workshop.js");

describe("bootcampData", () => {
  it("is assigned to the correct string", () => {
    expect(bootcampData).toBe("Multiverse");
  });
});

describe("array2D", () => {
  it("contains the correct data", () => {
    expect(array2D).toEqual([
      [true, true],
      ["Bootcamp", "Multiverse"],
    ]);
  });
});

// TASK 2

const { accounts, editValue } = require("./arrays-workshop.js");

describe("accounts", () => {
  it("has not been modified", () => {
    expect(accounts).toEqual([
      ["client", "invoice", "discount", "payable", "paid"],
      ["ace footwear", 10200, 0.1, 9180, false],
      ["bling.com", 4000, 0.05, null, true],
      ["chasm", 20000, 0.15, 17000, true],
    ]);
  });
});

describe("editValue()", () => {
  it("is a function", () => {
    expect(typeof editValue).toBe("function");
  });

  it("has four parameters", () => {
    expect(editValue).toHaveLength(4);
  });

  it("edits the correct cell", () => {
    const sheet = structuredClone(accounts);
    const edited = editValue(sheet, 2, 1, 5000);
    expect(edited).toEqual([
      ["client", "invoice", "discount", "payable", "paid"],
      ["ace footwear", 10200, 0.1, 9180, false],
      ["bling.com", 5000, 0.05, null, true],
      ["chasm", 20000, 0.15, 17000, true],
    ]);
  });

  it("edits the sheet in place", () => {
    const sheet = structuredClone(accounts);
    const edited = editValue(sheet, 2, 1, 5000);
    expect(edited).toBe(sheet);
  });
});

//TASK 3

const { copyPasteCell } = require("./arrays-workshop.js");

describe("accounts", () => {
  it("has not been modified", () => {
    expect(accounts).toEqual([
      ["client", "invoice", "discount", "payable", "paid"],
      ["ace footwear", 10200, 0.1, 9180, false],
      ["bling.com", 4000, 0.05, null, true],
      ["chasm", 20000, 0.15, 17000, true],
    ]);
  });
});

describe("copyPasteCell()", () => {
  it("is a function", () => {
    expect(typeof copyPasteCell).toBe("function");
  });

  it("has five parameters", () => {
    expect(copyPasteCell).toHaveLength(5);
  });

  it("copies and pastes", () => {
    const sheet = structuredClone(accounts);
    const edited = copyPasteCell(sheet, 1, 0, 2, 0);
    expect(edited).toEqual([
      ["client", "invoice", "discount", "payable", "paid"],
      ["ace footwear", 10200, 0.1, 9180, false],
      ["ace footwear", 4000, 0.05, null, true],
      ["chasm", 20000, 0.15, 17000, true],
    ]);
  });

  it("edits the sheet in place", () => {
    const sheet = structuredClone(accounts);
    const edited = copyPasteCell(sheet, 1, 0, 2, 0);
    expect(edited).toBe(sheet);
  });
});

//TASK 4

const { addRow } = require("./arrays-workshop.js");

describe("accounts", () => {
  it("has not been modified", () => {
    expect(accounts).toEqual([
      ["client", "invoice", "discount", "payable", "paid"],
      ["ace footwear", 10200, 0.1, 9180, false],
      ["bling.com", 4000, 0.05, null, true],
      ["chasm", 20000, 0.15, 17000, true],
    ]);
  });
});

describe("addRow()", () => {
  it("is a function", () => {
    expect(typeof addRow).toBe("function");
  });

  it("has two parameters", () => {
    expect(addRow).toHaveLength(2);
  });

  it("adds a row", () => {
    const sheet = structuredClone(accounts);
    const edited = addRow(sheet, ["turbo boost", 1000, 0.3, 21000, false]);
    expect(edited).toEqual([
      ["client", "invoice", "discount", "payable", "paid"],
      ["ace footwear", 10200, 0.1, 9180, false],
      ["bling.com", 4000, 0.05, null, true],
      ["chasm", 20000, 0.15, 17000, true],
      ["turbo boost", 1000, 0.3, 21000, false],
    ]);
  });

  it("edits the sheet in place", () => {
    const sheet = structuredClone(accounts);
    const edited = addRow(sheet, ["turbo boost", 1000, 0.3, 21000, false]);
    expect(edited).toBe(sheet);
  });
});
