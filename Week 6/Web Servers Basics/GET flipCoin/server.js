const app = require("./src/app.js");
const port = 3000; // Set your desired local port
const url = `http://localhost:${port}`;

app.listen(port, () => {
  console.log(
    `Your server is listening on: ${url}`
  );
});