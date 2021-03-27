import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import store from "./redux/store/store";
// import history from "./helper/history";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
