import React from "react";
import Car from "./components/Car";
// Data to pass as props

function App() {
  let cars = [
    { id: 1, brand: "Tesla", color: "Red" },
    { id: 2, brand: "Toyota", color: "White" },
    { id: 3, brand: "VW", color: "Purple" },
    { id: 4, brand: "Honda", color: "Green" },
  ];

  return (
    <div className="app">
      {cars.map((car) => (
        <Car key={car.id} data={car} />
      ))}
    </div>
  );
}

export default App;
