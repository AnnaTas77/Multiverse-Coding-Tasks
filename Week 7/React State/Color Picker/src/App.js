import React, { useState } from "react";
import Color from "./components/Color.js";

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <h1>Color Picker</h1>
      <Color
        color={"red"}
        updateColor={updateColor}
        selectedColor={selectedColor}
      />
      <Color
        color={"green"}
        updateColor={updateColor}
        selectedColor={selectedColor}
      />
      <Color
        color={"blue"}
        updateColor={updateColor}
        selectedColor={selectedColor}
      />
    </>
  );
}

module.exports = App;
