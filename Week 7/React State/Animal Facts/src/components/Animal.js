import React from "react";

function Animal({ data, updateAnimal }) {
  return (
    <div className="card">
      <div className="card-body">
        <h1>
          {data.name} {data.emoji}
        </h1>
        <p>Fun Fact: {data.funFact}</p>
      </div>
      <button className="btn btn-primary" onClick={updateAnimal}>
        Next Animal
      </button>
    </div>
  );
}

module.exports = Animal;
