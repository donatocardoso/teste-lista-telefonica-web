import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoadComponent from "./components/load";
import MainLayout from "./layouts/main";
import "./scss/index.css";

const Contato = lazy(() => import("./pages/contato"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<LoadComponent />}>
          <MainLayout>
            <Route path="/" exact component={Contato} />
          </MainLayout>
        </Suspense>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
