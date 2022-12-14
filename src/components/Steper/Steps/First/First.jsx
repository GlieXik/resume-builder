import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const First = ({ formik }) => {
  // const handleEnter = (event) => {
  //   if (event.key.toLowerCase() === "enter") {
  //     const form = event.target.form;
  //     const index = [...form].indexOf(event.target);
  //     form.elements[index + 1].focus();
  //     event.preventDefault();
  //   }
  return (
    <>
      <Box
        onSubmit={formik.handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          onChange={formik.handleChange}
        />
        <TextField
          id="profesion"
          label="Profesion"
          variant="outlined"
          onChange={formik.handleChange}
        />
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          onChange={formik.handleChange}
        />
        <TextField
          id="number"
          label="Number"
          variant="outlined"
          type="number"
          onChange={formik.handleChange}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          onChange={formik.handleChange}
        />
        <TextField
          id="linkedIn"
          label="LinkedIn"
          variant="outlined"
          onChange={formik.handleChange}
        />
        <TextField
          id="web"
          label="Web"
          variant="outlined"
          onChange={formik.handleChange}
        />
      </Box>
    </>
  );
};

export default First;
