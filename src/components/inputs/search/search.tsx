import React, { useCallback, useEffect, useState } from "react";
import styles from "./search.module.scss";
import { ReactComponent as Ico } from "../../../assets/svg/search-ico.svg";
import { ReactComponent as Cross } from "../../../assets/svg/cross_icon.svg";

export const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const handleInput = () => {
    setIsActive(true);
  };
  const handleCloseInput = () =>{
    setIsActive(false);
  }
  const resize = useCallback(() => {
    setIsActive(false);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={handleInput} className={styles.ico} data-test-id='button-search-open'>
        <Ico />
      </button>
      <input
        className={
          !isActive
            ? ` ${styles.input}`
            : `${styles.input} ${styles.input_active}`
        }
        type="text"
        placeholder="           Поиск книги или автора..."
        data-test-id='input-search'
      />
      {isActive && (
        <button type="button" className={styles.cross} onClick={handleCloseInput} data-test-id='button-search-close'>
          <Cross />
        </button>
      )}
    </div>
  );
};
