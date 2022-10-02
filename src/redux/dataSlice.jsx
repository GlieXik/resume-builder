import { createSlice, nanoid } from "@reduxjs/toolkit";
const tasksInitialState = {
  data: [],
  skills: [
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState: tasksInitialState,
  reducers: {
    addData: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
    },
    addSkill: {
      reducer(state, action) {
        state.skills.push(action.payload);
      },
      prepare(label) {
        return {
          payload: {
            key: nanoid(),
            label,
          },
        };
      },
    },
    handleDelete: {
      reducer(state, action) {
        const index = state.skills.findIndex(
          (skill) => skill.key === action.payload
        );
        state.skills.splice(index, 1);
      },
    },
  },
});

export const { addData, handleDelete, addSkill } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
