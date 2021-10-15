import { createContext, useState } from "react";
import { ContatoContextType } from "../../types/contato";
import ContatoGrid from "./ContatoGrid";
import ContatoModal from "./EditContatoModal";
import "./styles";

// Criando o contexto inicial
export const ContatoContext = createContext<ContatoContextType | null>(null);

// Criando o manipulador do contexto
const Contato: React.FC = () => {
  const [OpenCreateModal, CreateModalState] = useState<boolean>(false);
  const [OpenEditModal, EditModalState] = useState<boolean>(false);
  const [IdContato, SetIdContato] = useState<number>(0);

  const context = {
    CreateModal: {
      IsOpen: OpenCreateModal,
      Open: () => {
        CreateModalState(true);
      },
      Close: () => {
        CreateModalState(false);
      }
    },
    EditModal: {
      IsOpen: OpenEditModal,
      IdContato: IdContato,
      Open: (idContato: number) => {
        SetIdContato(idContato);
        EditModalState(true);
      },
      Close: () => {
        SetIdContato(null);
        EditModalState(false);
      }
    }
  };

  return (
    <ContatoContext.Provider value={context}>
      <ContatoModal></ContatoModal>
      <ContatoGrid></ContatoGrid>
    </ContatoContext.Provider>
  );
};

export default Contato;
