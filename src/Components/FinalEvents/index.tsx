import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import React from "react";
import { IEvent } from "../EventsList/EventItem";
import FinalEventItem from "./FinalEventItem";

type Props = {
  events: Array<IEvent>;
};

const FinalEvents = (props: Props) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Final Events</h1>
      <List>
        {props.events.map((item, index) => (
          <FinalEventItem key={index} item={item} />
        ))}
      </List>
    </Grid>
  );
};

export default FinalEvents;
