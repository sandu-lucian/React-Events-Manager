import React from "react";
import List from "./Components/List";
import "./App.css";

function App() {
  const countries = [
    "Romania",
    "Sweden",
    "Croatia",
    "Spain",
    "Germany",
    "Greece",
  ];

  return (
    <div>
      <List list={countries} />
    </div>
  );
}

export default App;
