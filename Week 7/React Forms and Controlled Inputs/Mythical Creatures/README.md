# Mythical Creatures

## Activity Directions

**GOAL**: Create a list of Mythical Creatures, with the ability to add a creature and modify the output based on if the creature is magical.

**Display Array of Creatures**

**In** `App.js`:

1. Initialize a new piece of state named `creatures` and state setter function of `setCreatures`. Set the initial value of `creatures` to be the `originalCreatures` array that has been provided for you.
2. In `<section className="step" id="creatures">` at the end of the JSX, `.map()` over the creatures and display the name of each creature in a div.
3. Run your code.
4. View your application. You should see a list of creatures. Run the tests. This should PASS one test

**Creature Component**

**In** `App.js`:

1. The creatures from the last step should be their own component. Import `components/Creature` into the `App.js` file
2. Update the `map()` function from the last step to to:
   - Create a `<Creature/>` component for each array element.
   - Give the `Creature` a prop of `creature` and should equal the object for that creature.

**In** `Creature.js`:

1. The `Creature` component should accept a prop, `creature`, and render the `props.creature.name` in the div.
2. In the `<div>`, conditionally add the `className=”magical”` if the `creature.isMagical` is true.
   - To conditionally add a class, use a ternary:
     `className = {isSomethingTrue ? "class-name-here" : ""}`
3. Run your code.
4. View your application. You should see the 🧙‍♂️ magical🪄 style show on the magical creatures.
5. Run the tests. This should PASS two tests

**Form State**

**In** `App.js`

1. Create 2 new pieces of state,
   - `name` set initially to `''`
   - `isMagical` set initially to `false`
2. For each input (text and checkbox), hook up the `onChange` and `value` properties.
3. For the `text` input:
   - Assign the `value` property to the current state of `name`
   - Create an `onChange` event handler that updates the `name` state whenever the user updates the field.
4. For the `<input type="checkbox">` element:
   - Assign the `value` property to the current state of `isMagical`
   - Create an `onChange` event handler that updates the `isMagical` state to the opposite of its current value every time it is clicked.

`onSubmit` **Handler**

**In** `App.js`:

1. Create a `handleSubmit` function that does the following:
   - Take the `event` as a parameter.
   - Use `event.preventDefault()` to prevent the page from refreshing.
   - Use `setCreatures` to add the newest creature in an object with `name` and `isMagical`. NOTE: `creatures.push({name, isMagical})` won't work because React expects a completely new value, replacing creatures with a new array. So we should instead spread in the current creatures array and then add the new `creature` after it. Your code should look something like this:

```javascript
setCreatures([
  …creatures, // original array
  { name, isMagical } // new creature
]);
```

    - Finally, use the state setter functions to set name and isMagical back to their original values.

2. In the `<form>` element opening tag, create an `onSubmit` event handler and pass it the `handleSubmit` function.
3. Run your code.
4. View your application.
5. Test your code.

**Bonus**

Optionally, add the disabled prop on the submit button if there is no `name` on state! This will effectively disallow someone from adding a creature with no name, which is good UX.
