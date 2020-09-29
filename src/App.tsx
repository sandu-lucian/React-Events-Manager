import React, { useState } from "react";
import "fontsource-roboto";
import Grid from "@material-ui/core/Grid";
import Form from "./Components/Form";
import DashboardList from "./Components/DashboardList";
import { IEvent } from "./Components/DashboardList/Item";
import "./App.css";

function App() {
  const [events, setEvents] = useState([
    {
      title: "",
      date: "",
      description: "",
    },
  ]);

  const saveData = (data: IEvent) => {
    setEvents((events) => [data, ...events]);
    console.log(events);
  };

  return (
    <Grid container alignContent="center" className="app-container">
      <Grid
        item
        xs={4}
        container
        alignContent="center"
        justify="center"
        className="module-container"
      >
        <button onClick={() => console.log(events)}>Log</button>
        <Form onSubmit={saveData}></Form>
      </Grid>
      <Grid item xs={4} className="module-container">
        <DashboardList itemList={events} />
      </Grid>
      <Grid item xs={4} className="module-container"></Grid>
    </Grid>
  );
}

export default App;
