import React from "react";
function User({ user }) {
  return (
    <>
      <p>The user name is</p>
      <p>{user.name}</p>
    </>
  );
}

module.exports = User;
