import React, { useState } from "react";
import Color from "./components/Color.js";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  const colorsArray = ["red", "green", "blue"];

  return (
    <>
      <h1>Color Picker</h1>
      {colorsArray.map((currentColor, index) => (
        <Color
          key={index}
          color={currentColor}
          updateColor={updateColor}
          selectedColor={selectedColor}
        />
      ))}
    </>
  );
}

module.exports = App;
