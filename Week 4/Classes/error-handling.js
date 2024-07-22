class Bag {
    constructor(weight) {
      if (!weight) {
        // Throws an error if no weight is provided
        throw new Error("Bag must have a weight");
      }
      this.weight = weight;
    }
  }
  
  // Block to handle error message
  try {
    const bag = new Bag();
  } catch (err) {
    console.log(err);
  }