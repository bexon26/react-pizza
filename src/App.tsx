import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";
import MainLayout from "./components/layouts/MainLayout";
import { useTranslation } from "react-i18next";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Time from "./pages/Time";

function App() {
  return (
    // <div className="container">
    <>
      <Routes>
        <Route path="/react-pizza/" element={<MainLayout />}>
          <Route path="" element={<Home />} />

          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
          <Route path="about" element={<About />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="time" element={<Time />} />
        </Route>
      </Routes>
    </>
    // {/* <NotFoundBlock /> */}
    // </div>
  );
}

export default App;
