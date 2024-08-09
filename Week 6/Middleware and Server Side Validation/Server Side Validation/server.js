const port = 3000; // Set your desired local port
const url = `http://localhost:${port}`;
const app = require("./src/app.js");

app.listen(port, () => {
  console.log(`Server listening on: ${url}`);
});
