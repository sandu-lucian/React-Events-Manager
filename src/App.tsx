import React, { useState } from "react";
import "fontsource-roboto";
import Grid from "@material-ui/core/Grid";
import EventForm from "./Components/EventForm";
import EventsList from "./Components/EventsList";
import { IEvent } from "./Components/EventsList/EventItem";
import "./App.css";

function App() {
  const [events, setEvents] = useState([] as Array<IEvent>);

  let editableItem;

  const editItem = (event: IEvent) => (editableItem = event);

  const handleSave = (event: IEvent) => setEvents([...events, event]);

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
        <EventForm onSubmit={handleSave} onEdit={editableItem} />
      </Grid>
      <Grid item xs={4} className="module-container">
        <EventsList events={events} toEdit={editItem} />
      </Grid>
      <Grid item xs={4} className="module-container"></Grid>
    </Grid>
  );
}

export default App;

// TODO list:

// 1. DONE - Reset inputs form after saving the event
// 2. DONE - There is a bug: Type 2 letters in title input and then click on clear.
//    User expects to reset the form but the validation error stil there
// 3. DONE - Add a new validation: in date field user can not select dates in the PassThrough.
// 4. DONE - In date field should a default value: the current date.
// 5. Add the edit flow.By clicking on edit button( from EventItem ) the form is prefield with the event item values.
//    The user can update any field.By saving, the new values are displayed in the list
