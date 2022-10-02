import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Steps = ({ getStepContent, step, steps, back, next }) => {
  return (
    <>
      <Box sx={{ mt: 2, mb: 1 }}>{getStepContent()}</Box>

      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={step === 0}
          onClick={back}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />

        <Button onClick={next}>
          {step === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </>
  );
};
export default Steps;
