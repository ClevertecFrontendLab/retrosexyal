import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./books.module.scss";
import { Book } from "../../components/book";
import { arrOfBooks } from "../../constants/constants";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchBooks } from "../../redux/slices/book-slice";
import { IBook } from "../../types/types";
import { routes } from "../../constants/routes";

export const Books = () => {
  const dispatch = useAppDispatch();

  const { books, loading } = useSelector((state: RootState) => state.books);
  const bookTheme = useSelector(
    (state: RootState) => state.bookThemeReducer.value
  );
  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks(""));
    }
  }, [dispatch, books.length]);
  return (
    <div className={styles.wrapper}>
      {!loading &&
        books.length > 0 &&
        books.map((e: IBook) => (
          <Link
            to={`${routes.booksAll}:${e.id}`}
            key={e.id}
            className={bookTheme ? styles.book_wrapp : styles.book_wrapp2}
          >
            <Book
              img={`https://strapi.cleverland.by${e.image?.url}`}
              rating={e?.rating}
              name={e?.title}
              autor={e?.authors[0]}
              status={e.delivery?.dateHandedFrom}
            />
          </Link>
        ))}
    </div>
  );
};
