import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoadComponent from "./components/load";
import GlobalContext from "./contexts/index";
import "./scss/index.css";

const Contato = lazy(() => import("./pages/contato"));

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<LoadComponent />}>
            <Route path="/" exact component={Contato} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
