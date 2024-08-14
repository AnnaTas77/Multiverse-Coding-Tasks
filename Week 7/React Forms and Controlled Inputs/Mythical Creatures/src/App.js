import React, { useState } from "react";
import Creature from "./components/Creature";
// import Creature

function App() {
  const originalCreatures = [
    {
      name: "Unicorn",
      isMagical: true,
    },
    {
      name: "Centaur",
      isMagical: false,
    },
  ];
  // Initialize state here

  const [creatures, setCreatures] = useState(originalCreatures);

  const [name, setName] = useState("");

  const [isMagical, setIsMagical] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleMagicalPower() {
    setIsMagical(!isMagical);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCreatures([
      ...creatures, // original array
      { name, isMagical }, // new creature
    ]);

    setName("");
    setIsMagical(false);
  }

  return (
    <>
      <section id="controls">
        <div className="step">
          <h1>Mythical Creatures</h1>
        </div>
        {/* attach handleSubmit to onSubmit prop */}
        <form className="step" aria-label="form" onSubmit={handleSubmit}>
          <h4>Add a Mythical Creature!</h4>
          {/* attach onChange handler */}
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="animal name"
            aria-label="name"
            required
          />
          <label>
            {/* attach onChange handler */}
            <input
              type="checkbox"
              name="checkbox"
              value={isMagical}
              onChange={handleMagicalPower}
              aria-label="magical"
            />
            <small> Magical Creature</small>
          </label>
          <button type="submit">Add Creature</button>
        </form>
      </section>
      <section className="step" id="creatures">
        {/* map over creatures, rendering Creature component, passing in creature prop */}
        {creatures.map((creature, index) => (
          <Creature key={index} creature={creature} />
        ))}
      </section>
    </>
  );
}

module.exports = App;
