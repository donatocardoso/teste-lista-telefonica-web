import React from "react";

import { ContatoContextProvider } from "./contato/context";

const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
      <ContatoContextProvider>{children}</ContatoContextProvider>;
    </>
  );
};

export default GlobalContext;
