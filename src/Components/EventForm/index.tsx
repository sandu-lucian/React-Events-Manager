import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Button from "@material-ui/core/Button";
import "./styles.css";
import { IEvent } from "../EventsList/EventItem";
import moment from "moment";

type Props = {
  onSubmit: (event: IEvent) => void;
  onEdit: (event: IEvent) => void;
};

const initialState = {
  title: "",
  date: moment(new Date()).format("YYYY-MM-DD"),
  description: "",
};

function EventForm(props: Props) {
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = () => {
    props.onSubmit(formData);
    setFormData({ ...initialState });
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
      <TextValidator
        InputLabelProps={{
          shrink: true,
        }}
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

      <Button onClick={() => setFormData({ ...initialState })}>Clear</Button>
      <Button type="submit">Save</Button>
    </ValidatorForm>
  );
}

export default EventForm;
