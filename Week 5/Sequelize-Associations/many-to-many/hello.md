# Many-To-Many Relationships

## Activity Directions

|||info
A `Cart` and `Product` model have been created for you as well as a `seed.js` file that will populate your database at the start of your program.
|||

**TASK**: A `Product` can be in many `Cart` instances and a `Cart` can have many `Product` instances. Define this association and update values once the association is defined.

**In `models/index.js`:**

1. A `Product` can be in many `Cart` instances and a `Cart` can have many `Product` instances. Define this association using `belongsToMany()`.

**In `index.js`:**

1. The `addToCart` method accepts a `productId` and `cartId` as an argument. Update the function to:
   - Find the `Product` that matches this `productId`.
   - Add the `Cart` with `cartId` to the found product.
   - Return the updated `Cart` instance.
2. The `addToProduct` method accepts a `cartId` and `productId` as an argument. Update the function to:
   - Find the `Cart` that matches this `cartId`.
   - Add the `Product` with `productId` to the found cart.
   - Return the updated `Product` instance.
3. Uncomment the `init()` function call to test out your code.
4. Run your code.
5. Test your code.
