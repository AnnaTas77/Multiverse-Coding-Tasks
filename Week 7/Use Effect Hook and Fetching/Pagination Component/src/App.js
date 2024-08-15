import React, { useState } from "react";
import Pagination from "./components/Pagination.js";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Lorem ipsum dolor sit amet" },
    { id: 2, name: "Consectetur adipiscing elit" },
    { id: 3, name: "Sed do eiusmod tempor incididunt" },
    { id: 4, name: "Ut labore et dolore magna aliqua" },
    { id: 5, name: "Ut enim ad minim veniam" },
    { id: 6, name: "Quis nostrud exercitation ullamco" },
    { id: 7, name: "Laboris nisi ut aliquip ex ea commodo consequat" },
    { id: 8, name: "Duis aute irure dolor in reprehenderit" },
    { id: 9, name: "Excepteur sint occaecat cupidatat non proident" },
    {
      id: 10,
      name: "Sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    { id: 11, name: "Lorem ipsum dolor sit amet" },
    { id: 12, name: "Consectetur adipiscing elit" },
    { id: 13, name: "Sed do eiusmod tempor incididunt" },
    { id: 14, name: "Ut labore et dolore magna aliqua" },
    { id: 15, name: "Ut enim ad minim veniam" },
    { id: 16, name: "Quis nostrud exercitation ullamco" },
    { id: 17, name: "Laboris nisi ut aliquip ex ea commodo consequat" },
    { id: 18, name: "Duis aute irure dolor in reprehenderit" },
    { id: 19, name: "Excepteur sint occaecat cupidatat non proident" },
    {
      id: 20,
      name: "Sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ]);
  return (
    <div className="App">
      <Pagination items={items} pageSize={4} />
    </div>
  );
}

export default App;
