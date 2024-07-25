// don't change this file
class Page {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  wordCount() {
    return this.content.split(" ").length;
  }
}



module.exports = Page;
