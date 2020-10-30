import React from "react";
import Grid from "@material-ui/core/Grid";
import { IEvent } from "./EventRow";
import EventRow from "./EventRow";
import "./styles.css";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

type Props = {
  events: Array<IEvent>;
  onListEdit: (event: IEvent) => void;
  onItemDelete: (id: string) => void;
};

const EventsList = (props: Props) => {
  const onEdit = (id: string) => {
    const event = props.events.filter((e) => e.id === id);
    props.onListEdit(event[0]);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1>Event list</h1>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Settings</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.events.map((item, index) => (
            <EventRow
              key={index}
              item={item}
              onItemEdit={onEdit}
              onItemDelete={props.onItemDelete}
            />
          ))}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default EventsList;
