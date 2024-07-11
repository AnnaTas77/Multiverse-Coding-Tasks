const { countVowels, isPalindrome } = require("./recursion-extension");

//countVowels

it("is a function", () => {
  expect(typeof countVowels).toEqual("function");
});

it("returns a number", () => {
  let returnedValue = countVowels("abc");
  expect(typeof returnedValue).toEqual("number");
});

it("returns the number of vowels in the given string", () => {
  let returnedValue = countVowels("life is like a box of chocolates");
  expect(returnedValue).toEqual(12);
});

//isPalindrome

it("is a function", () => {
  expect(typeof isPalindrome).toEqual("function");
});

it("returns a boolean", () => {
  let returnedValue = isPalindrome("definitely not");
  expect(typeof returnedValue).toEqual("boolean");
});

it("returns true if the passed string is a palindrome", () => {
  let returnedValue = isPalindrome("straw warts");
  expect(returnedValue).toEqual(true);
});

it("returns false if the passed string is not palindrome", () => {
  let returnedValue = isPalindrome("this is not a palindrome");
  expect(returnedValue).toEqual(false);
});

it("ignores differences in case", () => {
  let returnedValue = isPalindrome("UFOtofu");
  expect(returnedValue).toEqual(true);
});
