import React from "react";
import Intro from "./components/Intro.js";
import Main from "./components/Main.js";

function App() {
  return (
    <>
      <Intro name={"John"} />
      <Main experience={"Programming"} />

      <Intro name={"Sarah"} />
      <Main experience={"Web Development"} />
    </>
  );
}

module.exports = App;
