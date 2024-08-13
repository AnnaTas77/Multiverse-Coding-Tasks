import React from "react";
import UserStatus from "./components/UserStatus";

function App() {
  const users = [
    { username: "Alice", isLoggedIn: true },
    { username: "Bob", isLoggedIn: false },
    { username: "Charlie", isLoggedIn: true },
  ];

  return (
    <div className="app">
      {users.map((user) => (
        <UserStatus data={user} />
      ))}
    </div>
  );
}

export default App;
