const { Text, Image, File } = require("./file-important");

describe("A text", () => {
  it("has a name, extension and size", () => {
    const t1 = new Text("Annihilation", "txt", 100);
    expect(t1.name).toBe("Annihilation");
    expect(t1.extension).toBe("txt");
    expect(t1.size).toBe(100);
  });

  it("adds new file size to spaceUsed", () => {
    expect(File.spaceUsed).toBe(100);
  });

  it('must have a "txt" extension', () => {
    expect(() => new Text("Braveheart", "doc", 100)).toThrow(
      "Invalid extension"
    );
  });
});

describe("An image", () => {
  it("has a name, extension and size", () => {
    const i1 = new Image("Cats", "png", 500);
    expect(i1.name).toBe("Cats");
    expect(i1.extension).toBe("png");
    expect(i1.size).toBe(500);
  });
  // This includes the file that was created in the previous block.
  it("calculates remaining space", () => {
    expect(File.remainingSpace()).toBe(400);
  });

  it('must have a "png" or "jpg" extension', () => {
    expect(() => new Image("Dogs", "svg", 200)).toThrow("Invalid extension");
  });
});

describe("File class", () => {
  it("has 1000 diskSpace by default", () => {
    expect(File.diskSpace).toBe(1000);
  });

  it("cannot exceed its memory", () => {
    expect(() => new Image("Goats", "png", 800)).toThrow("Insufficient memory");
  });

  it("allows 100% memory to be used", () => {
    const t2 = new Text("Horses", "txt", File.remainingSpace());
    expect(File.remainingSpace()).toBe(0);
  });
});
