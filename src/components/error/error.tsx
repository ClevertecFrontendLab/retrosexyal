import React, { useState } from "react";
import styles from "./error.module.scss";

import { ReactComponent as Warning } from "../../assets/svg/warning-icon.svg";
import { ReactComponent as Cross } from "../../assets/svg/cross_icon.svg";

export const Error = () => {
  const [isClose, setIsClose] = useState(false);
  const closingMenu = () => {
    setIsClose(true);
  };
  return (
    <div className={!isClose ? styles.wrapper : styles.display_none} data-test-id='error'>
      <div className={styles.swg_wrapper}>
        <Warning />
      </div>
      <div className={styles.text}>
        Что-то пошло не так. Обновите страницу через некоторое время
      </div>
      <button type="button" onClick={closingMenu}>
        <Cross fill="#363636" />
      </button>
    </div>
  );
};
