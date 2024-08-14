import React from "react";

function Color({ setColor }) {
  return (
    <div className="step">
      <h4>Choose your Color</h4>
      <div>
        {/* attach onClick handlers */}
        <button
          className="red"
          onClick={() => {
            setColor("red");
          }}
        >
          red
        </button>
        <button
          className="green"
          onClick={() => {
            setColor("green");
          }}
        >
          green
        </button>
        <button
          className="blue"
          onClick={() => {
            setColor("blue");
          }}
        >
          blue
        </button>
        <button
          className="black"
          onClick={() => {
            setColor("black");
          }}
        >
          black
        </button>
      </div>
    </div>
  );
}

module.exports = Color;
