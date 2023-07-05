import { Suspense } from "react"; //React Suspense - это компонент React, который приостанавливает отрисовку компонентов до выполнения определенного условия и отображает запасной вариант - fallback. Этот запасной вариант является обязательным, и это может быть строка или другой компонент, например, спиннер. Так же React Suspense работает только с динамическим импортом, он же ленивая загрузка.
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";

import { store } from "./redux/store";

const rootElem = document.getElementById("root");
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Loading</div>}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
