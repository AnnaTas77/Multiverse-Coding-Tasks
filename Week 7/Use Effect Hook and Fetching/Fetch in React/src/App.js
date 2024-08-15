import React, { useState } from "react";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  const handleClick = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=15");
    const data = await response.json();

    setPokemonName(data.results[0].name);
  };
  return (
    <div className="poke-div">
      <div id="pokemon-name">{pokemonName}</div>
      <button onClick={handleClick}>Show Me the Pokemon!</button>
    </div>
  );
}

export default App;
