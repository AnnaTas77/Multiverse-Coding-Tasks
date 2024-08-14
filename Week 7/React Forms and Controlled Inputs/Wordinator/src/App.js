import React, { useState } from "react";
import Color from "./components/Color";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  // Initialize state here
  const [color, setColor] = useState("");
  const [words, setWords] = useState("");

  return (
    <>
      <section id="controls">
        <div className="step">
          <h1>Wordinator</h1>
        </div>
        <Color setColor={setColor} />
        <Input words={words} setWords={setWords} />
      </section>
      <Output color={color} words={words} />
    </>
  );
}

module.exports = App;
