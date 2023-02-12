import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./books.module.scss";
import { Book } from "../../components/book";
import { arrOfBooks } from "../../constants/constants";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchBooks } from "../../redux/slices/book-slice";
import { IBook } from "../../types/types";

export const Books = () => {
  const dispatch = useAppDispatch();
 
  const { books, loading } = useSelector((state: RootState) => state.books);
  const bookTheme = useSelector(
    (state: RootState) => state.bookThemeReducer.value
  );
  useEffect(() => {
    dispatch(fetchBooks());
   
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
       {!loading && books.map((e: IBook) => (
        <Link
          to={`book/:${e.id}`}
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
