import React from "react";
import styles from "./path-to-book.module.scss";

export const PathToBook = () => (
  <div className={styles.background}>
    <div className={styles.wrapper}>{}</div>
    <div className={styles.content_wrapper}>
      <p>Бизнес книги</p>
      <p className={styles.slash}>/</p>
      <p>
        Грокаем алгоритмы. Иллюстрированное пособие для программистов и
        любопытствующих
      </p>
    </div>
  </div>
);
