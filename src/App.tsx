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

  return <List list={countries} />;
}

export default App;