import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import NotFound from './pages/NotFound';

import './scss/app.scss';
import MainLayout from './components/layouts/MainLayout';



function App() {
  return (




    // <div className="container">
    <Routes>
      <Route to="/react-pizza/" element={<MainLayout />}>
        <Route path="/react-pizza" element={<Home />} />
        <Route path="/react-pizza/cart" element={<Cart />} />
        <Route path="/react-pizza/pizza/:id" element={<FullPizza />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
    // {/* <NotFoundBlock /> */}
    // </div>


  );
}

export default App;
