import React, { useState, useEffect } from "react";

function App() {
  const [facts, setFacts] = useState([]);
  async function getFacts() {
    const response = await fetch("https://dog-facts.netlify.app/facts.json");
    const data = await response.json();
    setFacts(data);
  }

  useEffect(() => {
    getFacts();
  }, []);
  return (
    <>
      <h1>Dog Facts</h1>
      <div className="list">
        {facts.map((fact, index) => (
          <div key={index}>{fact.text}</div>
        ))}
      </div>
    </>
  );
}

module.exports = App;
