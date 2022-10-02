import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import Examples from "../../../Resume/Examples";
// import MyDocument from "../../../Resume/Resumes/Resume1";

const FinishStep = ({ reset, set }) => {
  useEffect(() => {
    set();
  }, [set]);
  return (
    <>
      {/* <MyDocument></MyDocument> */}
      <Examples></Examples>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={reset}>Reset</Button>
      </Box>
    </>
  );
};
export default FinishStep;
