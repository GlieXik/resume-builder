import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import "react-step-progress/dist/index.css";

import { addData } from "../../redux/dataSlice";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import FinishStep from "../Steper/Steps/FinishStep/FinishStep";
import Steps from "../Steper/Steps/Steps";
import First from "../Steper/Steps/First/First";
import Second from "../Steper/Steps/Second/Second";
import Third from "../Steper/Steps/Third/Third";

const steps = [
  "Select campaign settingss",
  "Create an ad group",
  "Create an ad"
];
export const ProgresBar = () => {
  const dispatch = useDispatch();

  const set = () => {
    dispatch(addData(formik.values));
  };
  const formik = useFormik({
    initialValues: {
      startDate: Date.now(),
      endDate: Date.now()
    }
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    formik.resetForm();
    setActiveStep(0);
  };

  function getStepContent(step = activeStep) {
    switch (step) {
      case 0:
        return <First formik={formik}></First>;
      case 1:
        return <Second formik={formik}></Second>;
      case 2:
        return <Third formik={formik}></Third>;
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
        <FinishStep reset={handleReset} set={set}></FinishStep>
      ) : (
        <Steps
          getStepContent={getStepContent}
          step={activeStep}
          steps={steps}
          back={handleBack}
          next={handleNext}
        ></Steps>
      )}
    </Box>
  );
};
