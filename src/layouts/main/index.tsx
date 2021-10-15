import React, { createContext } from "react";
import Menu from "../../components/menu";
import { Page, PageData } from "./styles";

// Criando o tipo do contexto
type MainLayoutContextType = {};

// Criando o contexto inicial
export const MainLayoutContext = createContext<MainLayoutContextType>(null);

// Criando o manipulador do contexto
const MainLayout: React.FC = ({ children }) => {
  return (
    <MainLayoutContext.Provider value={{}}>
      <Page>
        <Menu></Menu>

        <PageData>{children}</PageData>
      </Page>
    </MainLayoutContext.Provider>
  );
};

export default MainLayout;
