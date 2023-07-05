import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layouts/MainLayout";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Time from "./pages/Time";
import { Login, Registration } from "./pages";
import { useAppDispatch } from "./redux/store";
import { fetchAuthMe } from "./redux/auth/auth";
import { AddDish } from "./components/AddDish";
import "./scss/app.scss";

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchAuthMe());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Routes>
        <Route path="/react-pizza/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="dish/:id" element={<FullPizza />} />
          <Route path="dish/:id/edit" element={<AddDish />} />
          <Route path="*" element={<NotFound />} />
          <Route path="about" element={<About />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="time" element={<Time />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="dish/create" element={<AddDish />} />
        </Route>
      </Routes>
    </>
    // {/* <NotFoundBlock /> */}
  );
}

export default App;
