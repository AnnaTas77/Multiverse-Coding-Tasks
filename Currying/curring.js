function curriedFn(param1) {
  return function (param2) {
    return function (param3) {
      return param1 + param2 + param3;
    };
  };
}

const result1 = curriedFn(1)(2)(3);
console.log("Result 1: ", result1);

const addFive = curriedFn(5);
const addFiveAndTen = addFive(10);
const result2 = addFiveAndTen(3);

console.log("Result 2: ", result2);

/**
 Since 'addFive' holds a function, you can call it using parentheses, just like you would with any other function. 
 */
