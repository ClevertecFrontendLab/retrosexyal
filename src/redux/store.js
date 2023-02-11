import { configureStore } from "@reduxjs/toolkit";
import { bookThemeReducer } from "./slices/book-theme-slice";

export const store = configureStore({
  reducer: { bookThemeReducer },
});
