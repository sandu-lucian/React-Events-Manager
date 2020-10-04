import React from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./styles.css";

export interface IEvent {
  title: string;
  date: string;
  description: string;
}

type Props = {
  item: IEvent;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

function EventItem(props: Props) {
  return (
    <ListItem divider alignItems="center">
      <Grid item xs={4}>
        <ListItemText primary={props.item.title} secondary={props.item.date} />
      </Grid>
      <Grid item xs={4}>
        <ListItemText primary={props.item.description} />
      </Grid>

      <Grid item xs={4}>
        <IconButton
          aria-label="edit"
          onClick={() => props.onEdit(props.item.title)}
        >
          <EditIcon />
        </IconButton>

        <IconButton
          aria-label="delete"
          onClick={() => props.onDelete(props.item.title)}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </ListItem>
  );
}

export default EventItem;
