import React from "react";

function Output({ color, words }) {
  return (
    <section className="step">
      <h1>
        --
        <span id="words" role="note" style={{ color: color }}>
          {words}
        </span>
        --
      </h1>
    </section>
  );
}

module.exports = Output;
