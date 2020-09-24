import React from "react";
import "fontsource-roboto";
import Grid from "@material-ui/core/Grid";
import DashboardList from "./Components/DashboardList";
import "./App.css";

function App() {
  const events = [
    {
      title: "Football Game",
      date: "13/07/2020",
      description: "Come see us!",
    },
    {
      title: "Concert",
      date: "20/08/2020",
      description: "Let's sing together!",
    },
    {
      title: "React Course",
      date: "11/09/2020",
      description: "Let's learn!",
    },
  ];

  return (
    <Grid container alignContent="center" className="app-container">
      <Grid item xs={4} className="module-container"></Grid>
      <Grid item xs={4} className="module-container">
        <DashboardList itemList={events} />
      </Grid>
      <Grid item xs={4} className="module-container"></Grid>
    </Grid>
  );
}

export default App;
