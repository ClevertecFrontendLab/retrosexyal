import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './path-to-book.module.scss';

export const PathToBook = () => {
  const info = useSelector((state: RootState) => state.books.book);
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>{}</div>
      <div className={styles.content_wrapper}>
        <p data-test-id='breadcrumbs-link'>{info?.categories[0]}</p>
        <p className={styles.slash}>/</p>
        <p data-test-id='book-name'>{info?.title}</p>
      </div>
    </div>
  );
};
