import React from "react";

function Color({ color, updateColor, selectedColor }) {
  return (
    <div style={{ background: selectedColor }}>
      <button
        className={color === selectedColor ? "selected" : ""}
        style={{ color: color }}
        onClick={() => {
          updateColor(color);
        }}
      >
        {color}
      </button>
    </div>
  );
}

module.exports = Color;
