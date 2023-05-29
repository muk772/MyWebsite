import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const apiData = createAsyncThunk();

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleDark: (state) => {
      state.isDark = !state.isDark;
    },
  },
});
export const { toggleDark } = darkModeSlice.actions;
export default darkModeSlice.reducer;
