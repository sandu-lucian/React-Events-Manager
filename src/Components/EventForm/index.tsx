import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import Button from "@material-ui/core/Button";
import TitleIcon from "@material-ui/icons/Title";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
import "./styles.css";
import { IEvent } from "../EventsList/EventItem";
import { Chance } from "chance";
import makeStyles from "@material-ui/core/styles/makeStyles";

const chance = new Chance();

type Props = {
  onSubmit: (event: IEvent) => void;
  itemToEdit: IEvent;
};

const initialState = {
  title: "",
  date: moment(new Date()).format("YYYY-MM-DD"),
  description: "",
  location: { country: "", region: "" },
  id: chance.guid(),
};

const useStyles = makeStyles({
  outlined: {
    color: "#d6362f",
    borderColor: "#d6362f",
    width: "100%",
    /* "&$hover": {
      color: "#1ba415",
    }, */
  },
  contained: {
    color: "white",
    borderColor: "#1ba415",
    backgroundColor: "#1ba415",
  },
});

const EventForm = (props: Props) => {
  const styles = useStyles();

  const [formData, setFormData] = useState(props.itemToEdit || initialState);

  const handleSubmit = () => {
    props.onSubmit(formData);
    setFormData({ ...initialState, id: chance.guid() });
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date: any) => {
    const searchDate = moment(date).isValid()
      ? moment(date).format("YYYY-MM-DD")
      : moment(new Date()).format("YYYY-MM-DD");

    setFormData({ ...formData, date: searchDate });
  };

  useEffect(() => {
    setFormData(props.itemToEdit);
  }, [props.itemToEdit]);

  ValidatorForm.addValidationRule(
    "isValidTitle",
    (value) => !!(value.length >= 5 || value === "")
  );

  ValidatorForm.addValidationRule(
    "isValidDescription",
    (value) => !!(value.length <= 20)
  );

  return (
    <ValidatorForm
      onSubmit={handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <Grid container direction="column" alignItems="center" spacing={3}>
        <Grid item alignItems="center">
          <h1>Create your event</h1>
        </Grid>

        <Grid
          item
          className="full-width"
          container
          direction="row"
          alignItems="center"
        >
          <Grid item xs={2}>
            <TitleIcon fontSize="large" classes={{ root: "form-cal-logo" }} />
          </Grid>
          <Grid item xs={10}>
            <TextValidator
              fullWidth
              variant="outlined"
              label="Title"
              onChange={handleChange}
              name="title"
              value={formData.title}
              required
              validators={["required", "isValidTitle"]}
              errorMessages={[
                "this field is required",
                "Minimum 5 characters needed",
              ]}
            />
          </Grid>
        </Grid>

        <Grid
          item
          className="full-width"
          container
          direction="row"
          alignItems="center"
        >
          <Grid item xs={2}>
            <EventIcon fontSize="large" classes={{ root: "form-cal-logo" }} />
          </Grid>
          <Grid item xs={10}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                fullWidth
                inputVariant="outlined"
                label="Date"
                name="date"
                format="YYYY-MM-DD"
                value={formData.date}
                onChange={handleDateChange}
                variant="dialog"
                animateYearScrolling
                disablePast
                required
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>

        <Grid
          item
          className="full-width"
          container
          direction="row"
          alignItems="center"
        >
          <Grid item xs={2}>
            <DescriptionIcon
              fontSize="large"
              classes={{ root: "form-cal-logo" }}
            />
          </Grid>
          <Grid item xs={10}>
            <TextValidator
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="outlined"
              label="Description"
              onChange={handleChange}
              name="description"
              value={formData.description}
              validators={["isValidDescription"]}
              errorMessages={["Maximum 20 characters allowed"]}
            />
          </Grid>
        </Grid>

        <Grid item className="full-width" container justify="space-between">
          <Grid item xs={5}>
            <Button
              variant="outlined"
              fullWidth
              classes={{ outlined: styles.outlined }}
              onClick={() => setFormData({ ...initialState })}
            >
              Clear
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              classes={{ contained: styles.contained }}
              fullWidth
              type="submit"
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ValidatorForm>
  );
};

export default EventForm;
