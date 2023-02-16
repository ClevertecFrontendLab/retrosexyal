import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { MainPage } from "./pages/main";
import { store } from "./redux/store";

import "./index.css";
import { Header } from "./containers/header";
import { BookPage } from "./pages/book-page";
import { Footer } from "./containers/footer";
import { Slider } from "./components/slider";
import { Loader } from "./components/loader";
import { LoaderErrorCont } from "./containers/loader-error-cont";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <LoaderErrorCont/>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/*" element={<MainPage />} />
            <Route path="/books/all/:id" element={<BookPage />} />
            <Route path="/test" element={<Slider />} />
          </Routes>
          <Footer />
        </div>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
