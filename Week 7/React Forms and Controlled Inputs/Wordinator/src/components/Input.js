import React from "react";

function Input({ words, setWords }) {
  function handleInput(e) {
    setWords(e.target.value);
  }

  function handleUpperCase() {
    setWords(words.toUpperCase());
  }

  function handleLowerCase() {
    setWords(words.toLowerCase());
  }

  return (
    <div className="step">
      <h4>Type your Word</h4>
      {/* attach onChange handler */}
      <input
        placeholder="Start Typing"
        aria-label="words"
        onChange={handleInput}
      />
      <div>
        {/* attach onClick handlers */}
        <button onClick={handleUpperCase}>UPPERCASE</button>
        <button onClick={handleLowerCase}>lowercase</button>
      </div>
    </div>
  );
}

module.exports = Input;
