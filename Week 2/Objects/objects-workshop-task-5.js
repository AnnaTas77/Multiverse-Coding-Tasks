/* Action Item: Stretch Problems Coding Challenge 
What else can a text editor do? What could you add to your product that users will love? Here are a few ideas, but use your imagination and implement any properties and methods you think would be interesting or useful.

 

Directions: Complete the following steps:   

 

Easier
Caps lock
Define a property capsLock and assign it to a boolean value.

 

If the value of the capsLock property is true then all characters should be converted to uppercase before being added to textEditor.document.

 

Define a toggleCapsLock() method that allows users to turn caps lock on and off.

 

Right to left
Some languages are written right-to-left! To be inclusive, you could have an rtl property that is assigned to a boolean value.

 

If the value of the rtl property is true, the addCharacter(char) and backspace() methods should add and remove from the start of the array instead of the end. A toggleRtl() method could turn right-to-left mode off and on.

 

Print
A print() method could use the built-in array join method to turn the document into a human-readable string and log it to the console.

 

Harder
Cursor
You could add a cursor property to the object and assign it to an integer that keeps track of the user's current position. When the user adds characters, they would be added at the cursor's location and not always the end of the array. You could have left() and right() methods to move the cursor's position, and home() and end() methods to send it to the start and end of the document.

 

Undo
Perhaps an undo() method? Keep track of the user's usage of the addCharacter(char) and backspace() methods and allow them to undo their actions. */

// Write your code here
const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
  capsLock: false,
  rtl: false,
  history: [],
  // Define your methods here
  addCharacter(char) {
    if (this.rtl===true){
        this.document.unshift(char);
    }
    this.document.push(char);
    return this;
  },
  backspace() {
     if (this.rtl===true){
        this.document.shift();
    }
    return this.document.pop();
  },
  characterCount() {
    return this.document.length;
  },
  save() {
    const copyOfDocument = structuredClone(this.document);
    this.history.push(copyOfDocument);
    return this;
  },
  restore(i) {
    const copyOfHistory = structuredClone(this.history[i]);
    this.document = copyOfHistory;
    return this;
  },
  toggleCapsLock() {
    this.capsLock = !this.capsLock;
    return this.capsLock;
  },
  print(){
      return this.document.join(' ')
  }
};

console.log(textEditor.toggleCapsLock());
console.log(textEditor.toggleCapsLock());
console.log(textEditor.toggleCapsLock());
console.log(textEditor.print());