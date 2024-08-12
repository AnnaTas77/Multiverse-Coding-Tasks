import React from "react";

function Car({ data }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data.brand}</h5>
        <p className="card-text">{data.color}</p>
      </div>
    </div>
  );
}

export default Car;
