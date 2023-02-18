import React, { useEffect, useState, useRef, useCallback } from "react";
import {  useLocation } from "react-router-dom";

import styles from "./menu.module.scss";
import { menuList } from "../../constants/constants";
import { RadioInput } from "../../components/inputs/radio-input";
import { ReactComponent as MenyToogleIcon } from "../../assets/svg/menu_toggle_icon.svg";
import { MenuContant } from "../../components/menu-contant";

export const Menu = ({ className }: { className?: string }) => {
  const [isHidden, setIsHidden] = useState(false);

  const initialIsBurger = window.innerWidth > 769 ? false : true;
  const [isBurger, setIsburger] = useState(initialIsBurger);

  const handleHiddenMenu = () => {
    setIsHidden((prev) => !prev);
  };

  const { pathname } = useLocation();

  const resize = useCallback(() => {
    const isBurger = window.innerWidth > 769 ? false : true;
    setIsburger(isBurger);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {!isBurger && <MenuContant burger={false} />}
    </div>
  );
};
