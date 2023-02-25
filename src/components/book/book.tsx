import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { BookButton } from '../buttons/book-button';
import { Rating } from '../rating/rating';

import styles from './book.module.scss';

type TProps = {
  img: string;
  rating: number;
  name: string;
  autor: string;
  status: string;
};

export const Book: React.FC<TProps> = ({ img, rating, name, autor, status }) => {
  const bookTheme = useSelector((state: RootState) => state.bookThemeReducer.value);
  const searchValue = useSelector((state: RootState) => state.serch.searchValue);

  const nameElements = name.split(searchValue).reduce<Array<string | JSX.Element>>((acc, element, index) => {
    if (index === 0) {
      return [element];
    }
    const keysValue = index;

    return [
      ...acc,
      <span key={keysValue} className={styles.selected_text} data-test-id='highlight-matches'>
        {searchValue}
      </span>,
      element,
    ];
  }, []);

  return (
    <div data-test-id='card' className={bookTheme ? styles.wrapper_сell : styles.wrapper_line}>
      <div className={styles.img_wrapper}>
        <img src={img} alt='img of book' />
      </div>
      <div className={styles.conent_wrapper}>
        <div className={styles.rating_сell}>
          <Rating rating={rating} />
        </div>
        <div className={styles.content}>
          <div>
            <h3>{nameElements}</h3>
          </div>
          <p>{autor}</p>
        </div>
        <div className={styles.rating_button_wrapper}>
          <div className={styles.rating_line}>
            <Rating width='current' height='current' rating={rating} />
          </div>
          <div className={styles.button_wrapper}>
            <BookButton title={status} className={styles.button_line} />
          </div>
        </div>
      </div>
    </div>
  );
};
