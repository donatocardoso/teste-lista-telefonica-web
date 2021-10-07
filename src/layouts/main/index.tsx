import React, { createContext, useState } from "react";
import { MenuContextProvider } from "../../components/menu";
import { Page, PageData } from "./styles";

//Tipando os dados que quero para usuário
type MainLayoutType = {};

//Tipando as Props do contexto
type PropsMainLayoutContext = {
  state: MainLayoutType;
  setState: React.Dispatch<React.SetStateAction<MainLayoutType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {},
  setState: () => {}, //função de inicialização
};

//criando nosso contexto MainLayoutContext
const MainLayoutContext = createContext<PropsMainLayoutContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const MainLayoutContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <MainLayoutContext.Provider
      value={{
        state,
        setState,
      }}
    >
      <Page>
        <MenuContextProvider></MenuContextProvider>

        <PageData>{children}</PageData>
      </Page>
    </MainLayoutContext.Provider>
  );
};

export { MainLayoutContextProvider };
export default MainLayoutContext;
