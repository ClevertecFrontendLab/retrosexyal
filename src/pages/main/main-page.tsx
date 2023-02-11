import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Rules } from "../rules";
import { Books } from "../../containers/books";
import { Menu } from "../../containers/menu";
import { Navbar } from "../../containers/navbar";

import styles from "./main-page.module.scss";
import { Contract } from "../contract";

export const MainPage = () => (
  <section className={styles.wrapper}>
    <Menu className={styles.none} />
    <div>
      <Routes>
        <Route path="rules" element={<Rules />} />
        <Route path="contract" element={<Contract />} />
        <Route
          path=""
          element={
            <>
              <Navbar />
              <Books />
            </>
          }
        />
      </Routes>
    </div>
  </section>
);
