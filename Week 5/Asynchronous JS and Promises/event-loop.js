/* **GOAL**: We are going to practice writing `setTimeout` to see how the event loop works! 

1. Inside the `delayedHello` function, create a `setTimeout` that prints to the console `"Hello after 2 seconds"`. This should print after 2 seconds (or 2000 milliseconds).
2. Inside the `delayedHello` function, create a second `setTimeout` that prints to the console `"Hello after 1 second"`. This should print after 1 second (or 1000 millisecond).
3. Run your code. If done correctly, the console should look like the text shown below.

```plaintext
Function starting up...
Function ending...
Hello after 1 second
Hello after 2 seconds
```
4. Test your code.*/

function delayedHello() {
  console.log("Function starting up...");

  // Create setTimeout methods here

  setTimeout(() => {
    console.log("Hello after 2 seconds");
  }, 2000);

  setTimeout(() => {
    console.log("Hello after 1 second");
  }, 1000);

  console.log("Function ending...");
}

delayedHello();

module.exports = {
  delayedHello,
};
