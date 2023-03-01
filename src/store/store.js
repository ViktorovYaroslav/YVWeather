import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice }   from "./weatherSlice";

// initialize our store
export const store = configureStore({
   reducer: {
      weather: weatherSlice.reducer,
   },
})