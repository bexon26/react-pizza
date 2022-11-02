import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/react-pizza" element={<Home />} />
              <Route path="/react-pizza/cart" element={<Cart />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            {/* <NotFoundBlock /> */}
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
