import { useState } from "react";
import resume1 from "../../images/resumes/resume1.jpg";
import resume2 from "../../images/resumes/resume2.jpg";
import { Box } from "../../utils/Box";
import Down from "./Resumes/Resume1";
import React from "react";

const Examples = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };

  return (
    <>
      {!state ? (
        <>
          <Box
            mt={5}
            display="flex"
            gridGap={5}
            flexWrap="wrap"
            justifyContent="center"
          >
            <Box textAlign="center" onClick={handleClick}>
              <h2>Просте резюме</h2>
              <img src={resume1} alt="resume" width="300"></img>
            </Box>
            <Box textAlign="center">
              <h2>Простіше за просте</h2>
              <img src={resume2} alt="resume" width="300"></img>
            </Box>
          </Box>
        </>
      ) : (
        <Down></Down>
      )}
    </>
  );
};
export default Examples;
