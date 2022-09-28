import { createSlice } from "@reduxjs/toolkit";
const tasksInitialState = [];

const dataSlice = createSlice({
  name: "data",
  initialState: tasksInitialState,
  reducers: {
    addData: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const { addData } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
