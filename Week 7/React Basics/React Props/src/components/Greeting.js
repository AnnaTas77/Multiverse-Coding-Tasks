import React from "react";

function Greeting(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Hello my name is {props.name}</h5>
        <p className="card-text">Today I am feeling {props.mood}</p>
      </div>
    </div>
  );
}

export default Greeting;
