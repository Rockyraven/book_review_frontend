// store.js

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Slices/bookSlice";
import authReducer from "./Slices/authSlice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
    auth: authReducer
    // Add other reducers if needed
  },
});
