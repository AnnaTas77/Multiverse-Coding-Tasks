/** Requirements

diskSpace is a static property and should be initialized to 1000. This should not be changed.
spaceUsed is a static property and should be initialized to 0.
remainingSpace() calculates and returns the space left in the file system for new files.
Each time a new Text or Image file is made, its size should be added to spaceUsed.
If the size of the file under construction would cause spaceUsed to exceed diskSpace, throw an error with the message 'Insufficient memory'
Text files are only allowed to have the extension 'txt'. Images can only have 'png' or 'jpg'. Anything else should throw an error with the message ‘Invalid extension’ */


class File {
  static diskSpace = 1000;
  static spaceUsed = 0;

  static remainingSpace() {
    return File.diskSpace - File.spaceUsed;
  }

  constructor(name, extension, size) {
    this.name = name;
    this.extension = extension;
    this.size = size;

    if (size > File.remainingSpace()) {
      throw new Error("Insufficient memory");
    }
    File.spaceUsed += size;
  }
}

class Image extends File {
  constructor(name, extension, size) {
    if (
      extension.toLowerCase() !== "png" &&
      extension.toLowerCase() !== "jpg"
    ) {
      throw new Error("Invalid extension");
    }
    super(name, extension, size);
  }
}

class Text extends File {
  constructor(name, extension, size) {
    if (extension.toLowerCase() !== "txt") {
      throw new Error("Invalid extension");
    }
    super(name, extension, size);
  }
}

// const t1 = new Text("Annihilation", "txt", 100);
// const i1 = new Image("Cats", "png", 500);
// console.log(File.remainingSpace())

// DO NOT EDIT CODE BELOW
module.exports = {
  File,
  Text,
  Image,
};
