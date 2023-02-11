import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BookButton } from "../../components/buttons/book-button";
import { PathToBook } from "../../components/path-to-book";
import { Rating } from "../../components/rating";
import { arrOfBooks } from "../../constants/constants";
import { ReactComponent as MenyToogleIcon } from "../../assets/svg/menu_toggle_icon.svg";
import styles from "./book-page.module.scss";
import { Review } from "../../components/review";
import { Slider } from "../../components/slider";
import emptyBookImg from "../../assets/png/empty-book-img.png";

export const BookPage = () => {
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();
  const book = arrOfBooks.filter((e) =>
    id ? e.id.toString() === id?.slice(1) : null
  );
  console.log(book[0]);
  const toggleComments = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <section className="book-page">
      <PathToBook />

      
      <div className={styles.main_info_wrapper}>
        <div className={styles.img_wrapper}>
          {book[0].imgArr?.length !== 0 && book[0].imgArr && (
            <Slider images={book[0].imgArr} />
          )}
          {book[0].imgArr?.length === 0 && <img src={emptyBookImg} alt="img" />}
        </div>
        <div className={styles.main_info_text}>
          <h2>{book[0].name}</h2>
          <p>{book[0].autor}</p>
          <BookButton title={book[0].status} className={styles.button} />
          <p className={book[0].imgArr && book[0].imgArr?.length > 1 ? `${styles.styled_subtitle} ${styles.extra_margin}` : styles.styled_subtitle }>О книге</p>
          <p className={styles.about_book_text}>{book[0].about}</p>
        </div>
      </div>



      <div className={styles.rating_container}>
        <p className={styles.styled_subtitle}>Рейтинг</p>
        <div className={styles.rating_wrapper}>
          {book[0].rating !== 0 && (
            <Rating rating={book[0].rating} width="24px" height="24px" />
          )}
          {book[0].rating === 0 && (
            <Rating
              showEmpty={true}
              rating={book[0].rating}
              width="24px"
              height="24px"
            />
          )}
          <p>{book[0].rating ? book[0].rating : "ещё нет оценок"}</p>
        </div>
      </div>
      <p className={styles.styled_subtitle}>Подробная информация</p>
      <div className={styles.info_wrapper}>
        <div className={styles.column1}>
          <div className={styles.row}>
            <p className={styles.details_title}>Издательство</p>
            <p>Питер</p>
          </div>
          <div className={styles.row}>
            <p className={styles.details_title}>Год издания</p>
            <p>2019</p>
          </div>
          <div className={styles.row}>
            <p className={styles.details_title}>Переплет</p>
            <p>Мягкая обложка</p>
          </div>
          <div className={styles.row}>
            <p className={styles.details_title}>Формат</p>
            <p>70х100</p>
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.row}>
            <p className={styles.details_title}>Жанр</p>
            <p>Компьютерная литература</p>
          </div>
          <div className={styles.row}>
            <p className={styles.details_title}>Вес</p>
            <p>370 г</p>
          </div>
          <div className={styles.row}>
            <p className={styles.details_title}>ISNB</p>
            <p>9889-989-8-44</p>
          </div>
          <div className={styles.row}>
            <p className={styles.details_title}>Изготовитель</p>
            <p>
              ОАО &apos;Питер Мейл&apos;. РФ, 198206, г. Санкт-Петербург,
              Петергофское ш, д. 73, лит. А29
            </p>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        <p className={styles.styled_subtitle}>
          Отзывы
          <p className={styles.review_counter}>{book[0].comments.length}</p>
          <button
            onClick={toggleComments}
            type="button"
            className={styles.toggle}
            data-test-id="button-hide-reviews"
          >
            <MenyToogleIcon className={isActive ? "" : styles.toggle_closed} />
          </button>
        </p>

        {isActive && book[0].comments.map((e) => <Review review={e} />)}
        <BookButton title="Оценить книгу" />
      </div>
    </section>
  );
};
