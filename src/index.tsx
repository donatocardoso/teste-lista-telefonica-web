import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalContext from "./context/index";
import Router from "./Router";
import './scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <Router />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
