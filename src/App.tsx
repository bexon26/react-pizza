import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    // <div className="container">
    <>
      <button type="button" onClick={() => changeLanguage("en")}>EN</button>
      <button type="button" onClick={() => changeLanguage("ru")}>RU</button>
      <div>{t("text")}</div>
      <Routes>
        <Route path="/react-pizza/" element={<MainLayout />}>
          <Route path="" element={<Home />} />

          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
    // {/* <NotFoundBlock /> */}
    // </div>
  );
}

export default App;
