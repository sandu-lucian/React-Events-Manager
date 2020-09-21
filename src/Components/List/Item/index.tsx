import React from "react";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./styles.css";

export type Props = {
  title: string;
  date: string;
  description: string;
};

function Item(props: Props) {
  return (
    <ListItem divider alignItems="center">
      <Grid item xs={4}>
        <ListItemText primary={props.title} secondary={props.date} />
      </Grid>
      <Grid item xs={4}>
        <ListItemText primary={props.description} />
      </Grid>

      <Grid item xs={4}>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>

        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </ListItem>
  );
}

export default Item;
