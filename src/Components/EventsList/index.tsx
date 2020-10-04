import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { IEvent } from "./EventItem";
import EventItem from "./EventItem";
import "./styles.css";

type Props = {
  events: Array<IEvent>;
  toEdit: (event: IEvent) => void;
};

function EventsList(props: Props) {
  const [list, setList] = useState([] as Array<IEvent>);

  const handleEdit = (title: string) => {
    let x = list.filter((e) => e.title === title);
    props.toEdit(x[0]);
  };

  const handleDelete = (title: string) =>
    setList(list.filter((el) => el.title !== title));

  useEffect(() => setList(props.events), [props.events]);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Event list</h1>
      <List>
        {list.map((item, index) => (
          <EventItem
            key={index}
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </List>
    </Grid>
  );
}

export default EventsList;
