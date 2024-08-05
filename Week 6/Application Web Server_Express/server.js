const app = require("./src/app.js");
const port = 3000; // Set your desired local port
const url = `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`Your Application Server is listening on (add a '/random' to the URL to see the response): ${url}`);
});
