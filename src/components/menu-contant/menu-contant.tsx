import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

import styles from "./menu-contant.module.scss";
import { menuList } from "../../constants/constants";

import { ReactComponent as MenyToogleIcon } from "../../assets/svg/menu_toggle_icon.svg";

export const MenuContant = ({
  className,
  burger,
}: {
  className?: string;
  burger: boolean;
}) => {
  const [isHidden, setIsHidden] = useState(true);

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
    if (pathname === "/rules" || pathname === "/contract") {
      setIsHidden(false);
    }
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize, pathname]);
  return (
    <aside className={`${styles.wrapper} ${className}`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          pathname !== "/rules" && pathname !== "/contract"
            ? `${styles.active} ${styles.link_main}`
            : styles.link_main
        }
        onClick={handleHiddenMenu}
        data-test-id={burger ? "burger-showcase" : "navigation-showcase"}
      >
        Витрина книг
        <div
          className={
            !isHidden
              ? styles.main_link_toggle
              : `${styles.main_link_toggle} ${styles.main_link_toggle_reverse}`
          }
        >
          <MenyToogleIcon />
        </div>
      </NavLink>

      <div className={!isHidden ? styles.navlink_gap : ""}> </div>

      <div className={isHidden ? styles.category : styles.display_none}>
        {menuList.map((e, ind) => (
          <NavLink
            key={e}
            to={ind === 0 ? "/" : `/test${ind}`}
            data-test-id={
              ind === 0 && !isBurger
                ? "navigation-books"
                : ind === 0 && isBurger
                ? "burger-books"
                : ""
            }
            className={({ isActive }) =>
              isActive ? `${styles.active_menu_link}` : styles.menu_link
            }
          >
            <div>{e}</div>
            <span className={styles.count}>{ind}</span>
          </NavLink>
        ))}
      </div>

      <div className={styles.link_wrapper}>
        <div>
          <NavLink
            to="/rules"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
            data-test-id={burger ? "burger-terms" : "navigation-terms"}
          >
            <p>Правила пользования</p>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/contract"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
            data-test-id={burger ? "burger-contract" : "navigation-contract"}
          >
            <p>Договор оферты</p>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
