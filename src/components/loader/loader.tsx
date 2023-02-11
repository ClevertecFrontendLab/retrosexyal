import React, { useEffect } from "react";
import styles from "./loader.module.scss";

import { ReactComponent as LoaderIcon } from "../../assets/svg/loader-icon.svg";

export const Loader = () =>{ 
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
  <div className={styles.wrapper}>
    <LoaderIcon className={styles.loader} />
  </div>
);}
