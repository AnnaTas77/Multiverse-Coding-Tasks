import React, { useState } from "react";
// Import useState here

function Button() {
  // Initialize state here
  const [count, setCount] = useState(0);

  // Create handleClick function here
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* Render count state in the h1*/}
      <h1>Clicked {count} times</h1>
      {/* Call handleClick function when clicking the button*/}
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default Button;
