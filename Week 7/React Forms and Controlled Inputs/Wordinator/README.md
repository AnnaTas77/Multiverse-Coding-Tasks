# React Props

## Activity Directions

**GOAL**: You will be creating an application to manipulate words to be uppercase, lowercase, and altering the page. The selected outputs will then render on the page.

**In** `App.js`:

1. Create a new piece of state called `color` and a `setColor` setter function. Initialize `color` as an empty string.
2. Pass `setColor` to the `Color` component as a `prop`.
3. Pass the `color` state to the `Output` component as a `prop`.

**In** `components/Color.js`:

1. Destructure the props in the `function Color` definition.
2. Under the comment `"attach color onClick handlers"`, create an `onClick` event handler for each color button (4 total). Pass it the `setColor` function and the color that the button represents.

**In** `components/Output.js`:

1. Destructure the props in the `function Output` definition.
2. In the "words" span, under the comment "add styles here", add the `color` to the `style` object.
3. Run your code.
4. View your application. Click the red button. The words should change color as you press the buttons.

**Handle Input** `onChange()`

**In** `App.js`:

1. Create a new piece of state called `words` and a `setWords` setter function. Initialize `words` as an empty string.
2. Pass `words` and `setWords` to the `Input` component as a `prop`.
3. Pass `words` to the `Output` component as a `prop`.

**In** `components/Input.js`:

1. Under the comment "attach onChange handler", create an `onChange` event handler for the `<input>` element.
2. In the `onChange` event handler, create an anonymous function that:
   - Takes the event as an argument.
   - Updates the `words` state by calling `setWords` and passing it the `event.target.value`.

**In** `components/Output.js`:

1. Add the `words` to the props destructuring you created in the last section.
2. Instead of the static "Your Words Here", replace it with the value of `words`.
3. Run your code.
4. View your application. The words shown between the `--` should reflect what is typed in the input box.

`onClick` **Event for Uppercase and Lowercase Buttons**

**In** `components/Input.js`:

1. Under the comment "attach onClick handlers" add an `onClick` event handler for the uppercase button.
2. Set the `onClick` event handler above equal to anonymous function. The function should call setWords and pass it the uppercase version of the words.
   - `toUpperCase()` should do the trick!
3. Repeat the steps above for the lowercase button, but this should lowercase the words.
   - `toLowerCase()` should do the trick!
4. Run your code.
5. View your application. End Result: You should be able to click buttons to colorize your words, and you should be able to change the words to all caps or all lowercase.
6. Test your code.
