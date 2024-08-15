import React, { useState, useEffect } from "react";
import CurrencyList from "./components/CurrencyList.js";

function App() {
  return (
    <div className="App">
      <h1> Coindesk API Front-End </h1>
      <CurrencyList />
    </div>
  );
}

export default App;
