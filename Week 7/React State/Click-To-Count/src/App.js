import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <>
      <h1>Your score is {score}</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

module.exports = App;
