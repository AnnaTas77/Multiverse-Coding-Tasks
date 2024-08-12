import React from "react";
import Animal from "./components/Animal";

function App() {
  const animals = [
    {
      name: "Fido",
      species: "dog",
    },
    {
      name: "Wiskers",
      species: "cat",
    },
    {
      name: "Fred",
      species: "rabbit",
    },
  ];
  return (
    <div>
      {animals.map((animal, index) => (
        <Animal key={index} animal={animal} />
      ))}
    </div>
  );
}
module.exports = App;
