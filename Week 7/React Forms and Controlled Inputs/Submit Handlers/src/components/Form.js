import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [namesArr, setNamesArr] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNamesArr([...namesArr, name]);
    setName("");
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Name:
          {/* Name input element */}
          <input
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Add Name
        </button>
      </form>
      <div id="card">
        <h3>Names Submitted</h3>
        {namesArr.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  );
}

module.exports = Form;
