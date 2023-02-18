import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as MenyToogleIcon } from "../../assets/svg/menu_toggle_icon.svg";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchCategory } from "../../redux/slices/category-slice";
import { routes } from "../../constants/routes";

import styles from "./menu-contant.module.scss";

export const MenuContant = ({
  className,
  burger,
}: {
  className?: string;
  burger: boolean;
}) => {
  const initialIsBurger = window.innerWidth > 769 ? false : true;
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { categorys } = useSelector((state: RootState) => state.categorys);
  const { books } = useSelector((state: RootState) => state.books);

  const [isHidden, setIsHidden] = useState(true);
  const [isBurger, setIsburger] = useState(initialIsBurger);

  const handleHiddenMenu = () => {
    setIsHidden((prev) => !prev);
  };

  const resize = useCallback(() => {
    const isBurger = window.innerWidth > 769 ? false : true;
    setIsburger(isBurger);
  }, []);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", resize);
    if (pathname === `${routes.rules}` || pathname === `${routes.contract}`) {
      setIsHidden(false);
    }
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize, pathname]);

  return (
    <aside className={`${styles.wrapper} ${className}`}>
      <NavLink
        to={routes.main}
        className={({ isActive }) =>
          pathname !== `${routes.rules}` && pathname !== `${routes.contract}`
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
        <NavLink
          to={routes.main}
          data-test-id={
            !isBurger ? "navigation-books" : isBurger ? "burger-books" : ""
          }
          className={({ isActive }) =>
            isActive ? `${styles.active_menu_link}` : styles.menu_link
          }
        >
          <div>Все книги</div>
          <span className={styles.count}>{books.length}</span>
        </NavLink>
        {categorys.map((e, ind) => (
          <NavLink
            key={e.id}
            to={`${e.path}`}
            className={({ isActive }) =>
              isActive ? `${styles.active_menu_link}` : styles.menu_link
            }
          >
            <div>{e.name}</div>
            <span className={styles.count}>{ind}</span>
          </NavLink>
        ))}
      </div>

      <div className={styles.link_wrapper}>
        <div>
          <NavLink
            to={routes.rules}
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
            to={routes.contract}
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
