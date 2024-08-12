import React from "react";
// Import the Greeting Component

import Greeting from "./components/Greeting.js";

function App() {
  return (
    <div className="app">
      {/* render 3 Greeting cards here */}
      <Greeting name={"Darrell"} mood={"happy"} />
      <Greeting name={"Heather"} mood={"excited"} />
      <Greeting name={"Frank"} mood={"tired"} />
    </div>
  );
}

export default App;
