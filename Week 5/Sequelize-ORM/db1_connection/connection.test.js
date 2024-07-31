const db = require("./connection");

test("connects to the database", async () => {
  try {
    await db.sync();
  } catch (err) {
    expect(err).toBeFalsy();
  }
});
