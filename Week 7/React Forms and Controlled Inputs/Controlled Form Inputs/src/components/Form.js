import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(20);

  return (
    <>
      <form>
        <label>
          First name:
          {/* First name input element */}
          <input
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </label>

        {/* Age input element */}
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </label>
      </form>
      <p className="name">Your name is {firstName}</p>
      <p className="age">Your age is {age}</p>
    </>
  );
}

module.exports = Form;
