import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import IconButton from "@material-ui/core/IconButton";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import "./styles.css";

export interface IEvent {
  title: string;
  date: string;
  description: string;
  id: string;
}

type Props = {
  item: IEvent;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const EventItem = (props: Props) => {
  return (
    <ListItem divider alignItems="center">
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${props.item.title} on ${moment(props.item.date).format(
          "MMMM Do YYYY"
        )}`}
        secondary={props.item.description}
      />

      <IconButton aria-label="location">
        <LocationOnIcon />
      </IconButton>

      <IconButton aria-label="edit" onClick={() => props.onEdit(props.item.id)}>
        <EditIcon />
      </IconButton>

      <IconButton
        aria-label="delete"
        onClick={() => props.onDelete(props.item.id)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default EventItem;
