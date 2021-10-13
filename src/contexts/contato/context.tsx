import React, { createContext, useState } from "react";

//Tipando os dados que quero para usuário
type ContatoType = {
  name: string;
  lastName: string;
  email: string;
};

//Tipando as Props do contexto
type PropsContatoContext = {
  state: ContatoType;
  setState: React.Dispatch<React.SetStateAction<ContatoType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    name: "",
    lastName: "",
    email: "",
  },
  setState: () => {}, //função de inicialização
};

//criando nosso contexto ContatoContext
const ContatoContext = createContext<PropsContatoContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const ContatoContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <ContatoContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </ContatoContext.Provider>
  );
};

export { ContatoContextProvider };
export default ContatoContext;