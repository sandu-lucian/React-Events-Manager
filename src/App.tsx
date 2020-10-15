import React, { useState } from "react";
import "fontsource-roboto";
import Grid from "@material-ui/core/Grid";
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
    <Grid container alignContent="center" className="app-container">
      <Grid
        item
        xs={6}
        container
        alignContent="center"
        justify="center"
        className="module-container"
      >
        <EventForm onSubmit={onFormSubmit} itemToEdit={itemToEdit} />
      </Grid>
      <Grid item xs={6} className="module-container">
        <EventsList
          events={events}
          onListEdit={(event: IEvent) => setItemToEdit(event)}
          onItemDelete={onItemDelete}
        />
      </Grid>
      {/* <Grid item xs={4} className="module-container"></Grid> */}
    </Grid>
  );
};
