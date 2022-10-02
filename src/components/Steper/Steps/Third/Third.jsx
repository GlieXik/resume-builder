import { useDispatch, useSelector } from "react-redux";
import { getSkills } from "../../../../redux/selectors";
import { handleDelete, addSkill } from "../../../../redux/dataSlice";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));
const Third = () => {
  const chipData = useSelector(getSkills);
  const dispatch = useDispatch();
  console.log(chipData);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const label = form.elements.skill.value;
    dispatch(addSkill(label));
    form.reset();
  };
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip
                label={data.label}
                onDelete={() => dispatch(handleDelete(data.key))}
              />
            </ListItem>
          );
        })}
      </Paper>

      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="skill" name="skill" label="Skill" variant="outlined" />
        <Button variant="outlined" type="submit" sx={{ margin: "10px" }}>
          Add
        </Button>
      </Box>
    </>
  );
};
export default Third;
