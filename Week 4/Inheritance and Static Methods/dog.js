/** Your class Dog should receive both name and owner parameters (both strings) in its constructor:
It should be able to pass the name parameter to the Mammal super class.
Your Dog class’ owner property should be initialized with the owner parameter.
Your class Dog should inherit the method eats() from the class Mammal. Create an instance of Dog and call eats() to verify this.
Your class Dog should also contain its own method called hasOwner() which checks to see if the Dog was initialized with an owner and return true. */

class Mammal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    return `${this.name} eats Food`;
  }
}
// Write your code here

class Dog extends Mammal {
  constructor(name, owner) {
    super(name);
    this.owner = owner;
  }

  hasOwner() {
    if (this.owner) {
      return true;
    } else {
      return false;
    }
  }
}

const dog1 = new Dog("Rocky", "Sam");
console.log(dog1.eats());
console.log(dog1.hasOwner());

// DO NOT EDIT CODE BELOW
module.exports = {
  Dog,
  Mammal,
};
