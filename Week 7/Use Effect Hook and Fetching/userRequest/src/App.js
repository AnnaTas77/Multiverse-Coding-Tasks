import React, { useState } from "react";
import User from "./components/User.js";
function App() {
  const [user, setUser] = useState({ name: "Joe" });

  async function handleClick() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    setUser(data);
  }
  return (
    <>
      <h1>User Request</h1>
      {/* Render User component and button here */}
      <User user={user} />
      <button onClick={handleClick}>Get User</button>
    </>
  );
}

module.exports = App;
