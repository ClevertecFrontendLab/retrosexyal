import React, {
  useState,
  createRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Burger } from "../../assets/svg/burger_icon.svg";
import { ReactComponent as BurgerActive } from "../../assets/svg/burger_icon_active.svg";
import { BurgerMenuComp } from "../../components/burger-menu-comp";
import { Logo } from "../../components/logo";
import { MenuContant } from "../../components/menu-contant";
import { Person } from "../../components/person";
import { Error } from "../../components/error";
import styles from "./header.module.scss";

import { RootState } from "../../redux/store";

export const Header = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { status } = useSelector((state: RootState) => state.books);
  const categorys = useSelector((state: RootState) => state.categorys);
  const refMenu = createRef<HTMLDivElement>();

  const handleBurger = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(!isPressed);
    event.stopPropagation();
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        event.target !== refMenu.current &&
        (event.target as HTMLElement)?.innerText !== "Витрина книг"
      ) {
        setIsPressed(false);
      }
    },
    [refMenu]
  );

  useLayoutEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick, isPressed]);

  const resize = useCallback(() => {
    setIsPressed(false);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <div className={styles.header_wrapper}>
      {status === "error" && <Error />}
      {categorys.status === "error" && <Error />}
      <Link className={styles.none} to="/">
        <Logo />
      </Link>
      <button
        onClick={handleBurger}
        type="button"
        className={styles.burger}
        aria-label="Open menu"
        data-test-id="button-burger"
      >
        {!isPressed ? <Burger /> : <BurgerActive />}
      </button>

      <div
        className={isPressed ? styles.burger_menu : styles.display_none}
        ref={refMenu}
        data-test-id="burger-navigation"
      >
        <MenuContant burger={true} />
        <BurgerMenuComp />
      </div>

      <h1>Библиотека</h1>
      <Person className={styles.none} greetings="Привет, Иван!" />
    </div>
  );
};
