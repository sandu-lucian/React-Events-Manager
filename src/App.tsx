import React, { useState } from "react";
import "fontsource-roboto";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EventForm from "./Components/EventForm";
import EventsList from "./Components/EventsList";
import { IEvent } from "./Components/EventsList/EventItem";
import "./App.css";
import moment from "moment";

export default () => {
  const [events, setEvents] = useState([] as Array<IEvent>);

  const [itemToEdit, setItemToEdit] = useState({
    title: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    description: "",
    id: "",
  });

  const onFormSubmit = (event: IEvent) => {
    const filteredItem = events.find((e) => e.id === event.id);

    if (!filteredItem) {
      setEvents([...events, event]);
    } else {
      const filteredList = events.filter((e) => e.id !== filteredItem.id);
      setEvents([...filteredList, event]);
    }
  };

  const onItemDelete = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper elevation={6} className="module-container">
          <EventForm onSubmit={onFormSubmit} itemToEdit={itemToEdit} />
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper elevation={6} className="module-container">
          <EventsList
            events={events}
            onListEdit={(event: IEvent) => setItemToEdit(event)}
            onItemDelete={onItemDelete}
          />
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper elevation={6} className="module-container">
          <h1>Hello</h1>
        </Paper>
      </Grid>
    </Grid>
  );
};
