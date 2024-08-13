import React from "react";

function Color({ color, updateColor, selectedColor }) {
  return (
    <button
      className={color === selectedColor ? "selected" : ""}
      style={{ color: color }}
      onClick={() => {
        updateColor(color);
      }}
    >
      {color}
    </button>
  );
}

module.exports = Color;
