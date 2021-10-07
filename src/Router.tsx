import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/contato";

const Router: React.SFC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />

      <Route />
    </BrowserRouter>
  );
};

export default Router;
