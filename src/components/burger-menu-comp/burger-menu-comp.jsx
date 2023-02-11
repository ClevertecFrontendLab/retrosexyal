import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./burger-menu-comp.module.scss"

export const BurgerMenuComp = () => (
  <div className={styles.wrapper}>
    <NavLink to="/profile" className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.link}` : styles.link
        }>Профиль</NavLink>
    <NavLink to="/exit" className={({ isActive }) =>
          isActive ? `${styles.active} ${styles.link}` : styles.link
        }>Выход</NavLink>
  </div>
);
