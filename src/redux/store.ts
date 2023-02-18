import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { bookThemeReducer } from "./slices/book-theme-slice";
import { bookReducer } from "./slices/book-slice";
import { categoryReducer } from "./slices/category-slice";

export const store = configureStore({
  reducer: {
    bookThemeReducer,
    books: bookReducer,
    categorys: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();
