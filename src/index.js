import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { MainPage } from "./pages/main";
import { Header } from "./containers/header";
import { BookPage } from "./pages/book-page";
import { Footer } from "./containers/footer";
import { Slider } from "./components/slider";
import { LoaderErrorCont } from "./containers/loader-error-cont";

import { routes } from "./constants/routes";
import { store } from "./redux/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <LoaderErrorCont/>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path={`${routes.main}*`} element={<MainPage />} />
            <Route path={`${routes.booksAll}:id`} element={<BookPage />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
