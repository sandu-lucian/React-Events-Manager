import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import EventForm from "./Components/EventForm";
import EventsList from "./Components/EventsTable";
import { IEvent } from "./Components/EventsTable/EventRow";
import moment from "moment";
import "fontsource-roboto";
import "./App.css";

export default () => {
  const [events, setEvents] = useState([] as Array<IEvent>);

  const [itemToEdit, setItemToEdit] = useState({
    title: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    description: "",
    location: { country: "", region: "" },
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
    <div className="app-container">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper elevation={6} className="module-container">
            <EventForm onSubmit={onFormSubmit} itemToEdit={itemToEdit} />
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper elevation={6} className="module-container">
            <EventsList
              events={events}
              onListEdit={(event: IEvent) => setItemToEdit(event)}
              onItemDelete={onItemDelete}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
