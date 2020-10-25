import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { IEvent } from "./EventItem";
import EventItem from "./EventItem";
import "./styles.css";

type Props = {
  events: Array<IEvent>;
  onListEdit: (event: IEvent) => void;
  onItemDelete: (id: string) => void;
  onLocationSet: (event: IEvent) => void;
};

const EventsList = (props: Props) => {
  const onEdit = (id: string) => {
    const event = props.events.filter((e) => e.id === id);
    props.onListEdit(event[0]);
    console.log(event[0]);
  };

  const onLocationEdit = (id: string, country: string, region: string) => {
    const event = props.events.filter((e) => e.id === id);
    event[0].location = { country: country, region: region };
    props.onLocationSet(event[0]);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Event list</h1>
      <List>
        {props.events.map((item, index) => (
          <EventItem
            key={index}
            item={item}
            onLocationEdit={onLocationEdit}
            onEdit={onEdit}
            onDelete={() => props.onItemDelete(item.id)}
          />
        ))}
      </List>
    </Grid>
  );
};

export default EventsList;
