import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalContext from "./contexts/index";
import Contato from "./pages/contato";
import "./scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <Route path="/" exact component={Contato} />

        <Route />
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
