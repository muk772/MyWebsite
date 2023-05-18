import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "./DarkModeSlice";

const store = configureStore({
  reducer: {
    darkMode: DarkModeSlice,
  },
});

export default store;
