const { db } = require("./connection.js");

test("connects to the database", async () => {
  try {
    await db.sync();
  } catch (err) {
    expect(err).toBeFalsy();
  }
});
