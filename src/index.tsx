import React, {Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n'

import { store } from './redux/store';



const rootElem = document.getElementById('root');
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Loading</div>}>   
        <App />

        </Suspense>
      </Provider>
    </BrowserRouter>,
  );
}
