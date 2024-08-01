# One-To-One Relationships

## Activity Directions

|||info
An `Order` and `Invoice` model have been created for you as well as a `seed.js` file that will populate your database at the start your program.
|||

Create your code in `index.js`.

1. Every `Invoice` has one `Order` that it corresponds to. Define this association using `hasOne()` and `belongsTo()`.
2. The `findInvoice` function accepts an `Order` id as an argument and should return an `Invoice` that matches this id. Use `findByPk` to find the `Order` that matches the provided id.
3. Use the `getInvoice` method created by your association to get the corresponding `Invoice` for the order you found in the last step.
4. Return the `Invoice` value.
5. Run your code.
6. Test your code.
