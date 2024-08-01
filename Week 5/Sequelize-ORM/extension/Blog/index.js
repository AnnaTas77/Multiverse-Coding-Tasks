const blogSeed = require("./seeds/blogSeed.json");
const userSeed = require("./seeds/userSeed.json");
// Import database and Models
// WRITE YOUR CODE HERE
const { sequelize } = require("./db.js");
const { Blog } = require("./Models/Blog.js");
const { User } = require("./Models/User.js");

async function initialize() {
  // Uncomment the line below to run any debugging
  //   await sequelize.sync({ force: true });

  // Create a User and Blog from seed file
  // WRITE YOUR CODE HERE

  userSeed.forEach(async (user) => {
    await User.create(user);
  });

  blogSeed.forEach(async (blog) => {
    await Blog.create(blog);
  });

  let allUsers = await User.findAll({ raw: true });
  //   console.log("ALL Users: ", allUsers);

  let allBlogs = await Blog.findAll({ raw: true });
  //   console.log("ALL Blogs: ", allBlogs);

  let foundBlog = await Blog.findByPk(2);
  foundBlog = foundBlog.toJSON();

  //   console.log("FOUND Blog: ", foundBlog);

  await Blog.update(
    {
      title: "Why I love Java",
      post: "Java is a good language because it is platform-independent, object-oriented, and has a vast community and ecosystem of libraries and tools.",
    },
    { where: { title: "Why I Love JavaScript" } }
  );
  let updatedBlog = await Blog.findOne({ where: { title: "Why I love Java" } });
  updatedBlog = updatedBlog.toJSON();

  //   console.log("UPDATED Blog: ", updatedBlog);

  let deletedUser = await User.findByPk(3);
  deletedUser = deletedUser.toJSON();

  //   console.log("DELETED User: ", deletedUser);

  await User.destroy({ where: { id: 3 } });

  // DO NOT EDIT
  return {
    allUsers,
    updatedBlog,
    deletedUser,
  };
}
// DO NOT EDIT

// Uncomment the line below to run any debugging
// initialize();

// DO NOT EDIT BELOW
module.exports = {
  initialize,
};
