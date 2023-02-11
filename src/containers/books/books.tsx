import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./books.module.scss";
import { Book } from "../../components/book";
import { arrOfBooks } from "../../constants/constants";

interface IBook {
  id: number;
  img: string;
  rating: number;
  name: string;
  autor: string;
  status: string;
}

interface RootState {
  bookThemeReducer: {
    value: boolean;
  };
}

export const Books = () => {
  const bookTheme = useSelector(
    (state: RootState) => state.bookThemeReducer.value
  );
  return (
    <div className={styles.wrapper}>
      {arrOfBooks.map((e: IBook) => (
        <Link
          to={`book/:${e.id}`}
          key={e.id}
          className={bookTheme ? styles.book_wrapp : styles.book_wrapp2}
        >
          <Book
            img={e.img}
            rating={e.rating}
            name={e.name}
            autor={e.autor}
            status={e.status}
          />
        </Link>
      ))}
    </div>
  );
};
