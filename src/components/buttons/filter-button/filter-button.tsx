import React from "react";
import { ReactComponent as Ico } from "../../../assets/svg/filter-button-ico.svg";
import styles from './filter-button.module.scss'

export const FilterButton = () => (
  <div className={styles.wrapper}>
    <Ico />
    <p>По рейтингу</p>
  </div>
);
