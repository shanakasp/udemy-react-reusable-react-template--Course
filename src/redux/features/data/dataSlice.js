import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Smaple Project redux",
  name2: "Sorry, but the page you are looking for does not exist.",
};

const dataSlice = createSlice({
  name: "data",
  name2: "data2",
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
