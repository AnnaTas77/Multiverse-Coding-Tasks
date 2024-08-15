import React, { useState, useEffect } from "react";

function App() {
  const [pokeArr, setPokeArr] = useState([]);
  const pokeRequest = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=15");
    const data = await res.json();
    // Update state
    setPokeArr(data.results);
  };

  useEffect(() => {
    pokeRequest();
  }, []);

  return (
    <div className="poke-div">
      <h1>Gotta Catch 'Em All</h1>
      {pokeArr.map((poke, index) => (
        <p key={index}>{poke.name}</p>
      ))}
    </div>
  );
}

export default App;
