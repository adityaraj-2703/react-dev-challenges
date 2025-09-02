import { configureStore } from "@reduxjs/toolkit";
import { rtkCarSlice } from "../slices/rtkCarSlice";

const store = configureStore({
  reducer: {
    cars: rtkCarSlice.reducer,
  },
});

export default store;