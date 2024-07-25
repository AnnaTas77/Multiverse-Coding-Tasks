function doubleValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number")
      throw new Error("Array can only contain numbers");
    arr[i] = arr[i] * 2;
  }
  return arr;
}

module.exports = doubleValues;
