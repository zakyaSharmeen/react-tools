import { configureStore } from "@reduxjs/toolkit";
import   gitUserSlice   from "../faeture/gitUserSlice";

export const store = configureStore({
  reducer: {
    app: gitUserSlice,
  },
});