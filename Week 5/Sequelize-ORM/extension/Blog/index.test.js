const { sequelize } = require("./db.js");
const { Blog } = require("./Models/Blog.js");
const { User } = require("./Models/User.js");
const blogSeed = require("./Seeds/blogSeed.json");
const userSeed = require("./Seeds/userSeed.json");
const { initialize } = require("./index.js");
let allUsers;
let updatedBlog;
let deletedUser;

beforeAll(async () => {
  await sequelize.sync({ force: true });
  ({ allUsers, updatedBlog, deletedUser } = await initialize());
});

test("connects to the database", async () => {
  try {
    await sequelize.sync();
  } catch (err) {
    expect(err).toBeFalsy();
  }
});

test("Blog model can insert and query all blogs", async () => {
  const createdBlog = await Blog.create(blogSeed[0]);
  expect(createdBlog).toEqual(expect.objectContaining(blogSeed[0]));

  const [foundBlog] = await Blog.findAll();
  expect(foundBlog).toEqual(
    expect.objectContaining({
      title: "My First Blog Post",
      post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
      postNumber: 1,
    })
  );
});

test("Blog model can insert and query all blogs", async () => {
  const createdUser = await User.create(userSeed[0]);
  expect(createdUser).toEqual(expect.objectContaining(userSeed[0]));
  const [foundUser] = await User.findAll();
  expect(foundUser).toEqual(
    expect.objectContaining({
      name: "Alice",
      password: "password1",
    })
  );
});

test("allUsers contains created users", async () => {
  expect(allUsers[0]).toEqual(expect.objectContaining(userSeed[0]));
  expect(allUsers[1]).toEqual(expect.objectContaining(userSeed[1]));
  expect(allUsers[2]).toEqual(expect.objectContaining(userSeed[2]));
});

test("updatedBlog contains the updated blog", () => {
  expect(updatedBlog).toEqual(
    expect.objectContaining({
      title: "Why I love Java",
      post: "Java is a good language because it is platform-independent, object-oriented, and has a vast community and ecosystem of libraries and tools.",
    })
  );
});

test("deletedUser contains the deleted user", () => {
  // destroy returns the deleted instance
  expect(deletedUser).toEqual(
    expect.objectContaining({
      name: "Charlie",
      password: "qwerty",
    })
  );
});
