import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import "./styles.css";

function Form() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });
  const handleSubmit = () => console.log("am dat submit");

  return (
    <ValidatorForm
      onSubmit={handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <TextValidator
        label="Title"
        onChange={(e) => {
          const element = e.currentTarget as HTMLInputElement;
          const value = element.value;

          setFormData({
            title: value,
            date: formData.date,
            description: formData.description,
          });
        }}
        name="title"
        value={formData.title}
        validators={["required"]}
        errorMessages={[
          "this field is required",
          "title must be at least 5 characters long",
        ]}
      />

      <TextField
        type="date"
        label="Date"
        required
        onChange={(e) => {
          const element = e.currentTarget as HTMLInputElement;
          const value = element.value;

          setFormData({
            title: formData.title,
            date: value.toString(),
            description: formData.description,
          });
        }}
        name="date"
        value={formData.date}
      />

      <TextValidator
        label="Description"
        onChange={(e) => {
          const element = e.currentTarget as HTMLInputElement;
          const value = element.value;

          setFormData({
            title: formData.title,
            date: formData.date,
            description: value,
          });
        }}
        name="description"
        value={formData.description}
      />

      <Button
        onClick={() => setFormData({ title: "", date: "", description: "" })}
      >
        Clear
      </Button>
      <Button type="submit" onClick={() => console.log(formData)}>
        Save
      </Button>
    </ValidatorForm>
  );
}

export default Form;
