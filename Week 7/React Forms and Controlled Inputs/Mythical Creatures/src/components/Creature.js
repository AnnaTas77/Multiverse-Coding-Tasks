import React from "react";

function Creature({ creature }) {
  // display creature data here
  return (
    <div className={creature.isMagical ? "magical" : ""}>{creature.name}</div>
  );
}

module.exports = Creature;
