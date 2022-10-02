import { Box, TextField } from "@mui/material";
import * as React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Second = ({ formik }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            onSubmit={formik.handleSubmit}
            component="form"
            noValidate
            autoComplete="off"
          >
            <TextField
              fullWidth
              multiline
              rows={4}
              id="summary"
              name="summary"
              label="Summary"
              variant="outlined"
              onChange={formik.handleChange}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="nameProject"
              name="nameProject"
              label="Name"
              variant="outlined"
              onChange={formik.handleChange}
            />
            <TextField
              id="linkProject"
              name="linkProject"
              label="Link"
              variant="outlined"
              onChange={formik.handleChange}
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              id="summaryProject"
              name="summaryProject"
              label="Summary"
              variant="outlined"
              onChange={formik.handleChange}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            onSubmit={formik.handleSubmit}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DesktopDatePicker
                label="Date desktop"
                inputFormat="DD/MM/YYYY"
                value={formik.values.startDate}
                onChange={(value) => {
                  formik.setFieldValue("startDate", value);
                }}
                renderInput={(params) => <TextField {...params} />}
              />

              <DesktopDatePicker
                label="Date desktop"
                inputFormat="DD/MM/YYYY"
                value={formik.values.endDate}
                onChange={(value) => {
                  formik.setFieldValue("endDate", value);
                }}
                renderInput={(params) => <TextField {...params} />}
              /> */}
              <TextField
                id="nameEducation"
                name="nameEducation"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
              />
              <TextField
                id="typeEducation"
                name="typeEducation"
                label="Type"
                variant="outlined"
                onChange={formik.handleChange}
              />
              <TextField
                id="countryEducation"
                name="countryEducation"
                label="Country"
                variant="outlined"
                onChange={formik.handleChange}
              />
            </LocalizationProvider>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Second;
