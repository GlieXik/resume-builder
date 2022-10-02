import { TextField } from "@mui/material";
import React from "react";
const First = ({ formik }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
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
      </form>
    </>
  );
};
export default First;
