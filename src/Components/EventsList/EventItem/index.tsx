import React, { useState } from "react";
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

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "./styles.css";
import Button from "@material-ui/core/Button";

export interface IEvent {
  title: string;
  date: string;
  description: string;
  location: { country: string; region: string };
  id: string;
}

type Props = {
  item: IEvent;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onLocationEdit: (id: string, country: string, region: string) => void;
};

const EventItem = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

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

      <IconButton aria-label="location" onClick={() => setOpen(true)}>
        <LocationOnIcon />
      </IconButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Choose event location</DialogTitle>
        <DialogContent>
          <CountryDropdown
            value={country}
            onChange={(value) => setCountry(value)}
          />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(value) => setRegion(value)}
            disableWhenEmpty
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setCountry("");
              setRegion("");
              setOpen(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              props.onLocationEdit(props.item.id, country, region);
              setOpen(false);
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

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
