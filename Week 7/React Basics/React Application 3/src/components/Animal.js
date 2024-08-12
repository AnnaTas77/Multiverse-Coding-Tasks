import React from "react";

function Animal({ animal }) {
  //Your Code Here:
  return (
    <div>
      <h1>{animal.name}</h1>
      <h2>{animal.species}</h2>
    </div>
  );
}

module.exports = Animal;
