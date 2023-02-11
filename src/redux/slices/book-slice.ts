import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { IBook, BooksState } from "../../types/types";
import { Status } from "../../types/types";

const initialState: BooksState = {
  books: [],
  loading: false,
  status: Status.LOADING,
};

export const fetchBooks = createAsyncThunk("bookSlice/getBooks", async () => {
  const responce = await axios.get("https://strapi.cleverland.by/api/books");
  const data = await responce.data;
  return data as IBook[];
});

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks(state, action: PayloadAction<BooksState>) {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchBooks.fulfilled,
      (state, action: PayloadAction<IBook[]>) => {
        state.books = action.payload;
        state.loading = false;
        state.status = Status.COMLETED;
      }
    );
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.loading = false;
      state.status = Status.ERROR;
    });
  },
});

export const { getBooks } = bookSlice.actions;

export const bookReducer = bookSlice.reducer;
