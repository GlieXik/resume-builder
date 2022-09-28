import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import the stylesheet
import "react-step-progress/dist/index.css";
import { TextField } from "@mui/material";
// import { Box } from "../../utils/Box";
//!
import { addData } from "../../redux/dataSlice";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

// !
const steps = [
  "Select campaign settingss",
  "Create an ad group",
  "Create an ad",
];
export const ProgresBar = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {},
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    formik.resetForm();
    setActiveStep(0);
  };
  const set = () => {
    dispatch(addData(formik.values));
  };
  function getStepContent(step) {
    switch (step) {
      case 0:
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
      case 1:
        return "What is an ad group anyways?";
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Unknown step";
    }
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          {set()}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Box>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
