import React, { useState } from "react";
// Import useState here

function UserStatus({ data }) {
  const [loggedIn, setLoggedIn] = useState(data.isLoggedIn);

  const handleClick = () => {
    setLoggedIn(!loggedIn);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {data.username} is {loggedIn ? "currently" : "not"} logged in
        </h5>
        <button onClick={handleClick}>{loggedIn ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
}

export default UserStatus;
