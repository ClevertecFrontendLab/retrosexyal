import React from "react";
import styles from "./review.module.scss";
import ava from "../../assets/png/avatar.png";
import { Rating } from "../rating";

type TProps = {
  review: {
    rating?: number;
    autor?: string;
    comment?: string;
    date?: string;
  };
  className?: string;
};

export const Review: React.FC<TProps> = ({ review, className }) => (
  <div>
    <div>
      <div className={styles.review}>
        <div className={styles.img_wrapper}>
          <img src={ava} alt="img" />
        </div>
        <div className={styles.styled_autor_wrapper}>
          <p className={styles.styled_autor}>{review.autor}</p>
          <p className={styles.styled_autor}>{review.date}</p>
        </div>
      </div>
      <Rating rating={review.rating} width="24px" height="24px" />
    </div>
    <div className={styles.review_text}>{review.comment}</div>
  </div>
);
