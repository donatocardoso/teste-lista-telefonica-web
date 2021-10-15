import { createContext, useState } from "react";
import ContatoGrid from "./ContatoGrid";
import ContatoModal from "./ContatoModal";
import "./styles";

// Criando o tipo do contexto
type ContatoContextType = {
  isOpen: boolean;
  idContato: number;

  open: React.Dispatch<React.SetStateAction<number>>;
  close: React.Dispatch<React.SetStateAction<boolean>>;
};

// Criando o contexto inicial
export const ContatoContext = createContext<ContatoContextType | null>(null);

// Criando o manipulador do contexto
const Contato: React.FC = () => {
  const [isOpen, setState] = useState<boolean>(false);
  const [idContato, setIdContato] = useState<number>(0);

  function open(idContato: number) {
    setIdContato(idContato);
    setState(true);
  }

  function close(value: boolean) {
    setIdContato(null);
    setState(false);
  }

  return (
    <ContatoContext.Provider value={{ isOpen, idContato, open, close }}>
      <ContatoModal></ContatoModal>
      <ContatoGrid></ContatoGrid>
    </ContatoContext.Provider>
  );
};

export default Contato;
