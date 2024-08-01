# One-To-Many Relationships

## Activity Directions

|||info
An `Order` and `Product` model have been created for you as well as a `seed.js` file that will populate your database at the start of your program.
|||

**TASK**: We now have a `Payment` model to associate with and an `Order` can have many products. Define this association and update values once the association is defined.

Create your code in `index.js`.

1. Every `Order` can have many `Payment` instances, but every `Payment` is assigned to a single `Order`. Define this association using `hasMany()` and `belongsTo()`.
2. The `findPayment` method accepts an `Order` id as an argument and should:
   - Find the `Order` that matches this `id`.
   - Get all the `Payment` instances associated with this `id`.
   - Return the `Payment` instances.
3. The `updatePayment` method accepts an `orderId` and a `paymentId`. This function should:
   - Find the `Order` that matches `orderId`.
   - Add the `Payment` that has `paymentId` to the found order.
   - Return the updated payment.
4. Run your code.
5. Test your code.
