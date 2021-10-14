import React, { createContext, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import {
  FaFileExport,
  FaFileImport,
  FaFolderOpen,
  FaPrint,
  FaRegPlusSquare,
  FaRegUser,
  FaSortDown,
  FaTrash,
  FaUndo
} from "react-icons/fa";
import { IconRow } from "./styles";

//Tipando os dados que quero para usuário
type MenuType = {
  open: boolean;
};

//Tipando as Props do contexto
type PropsMenuContext = {
  state: MenuType;
  setState: React.Dispatch<React.SetStateAction<MenuType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    open: true
  },
  setState: () => {} //função de inicialização
};

//criando nosso contexto MenuContext
const MenuContext = createContext<PropsMenuContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const MenuContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <MenuContext.Provider
      value={{
        state,
        setState
      }}
    >
      <Navbar fixed="top" bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaRegUser></FaRegUser>

                <Navbar.Brand href="#home">Contatos</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaUndo></FaUndo>

                <Navbar.Brand href="#home">Contatos frequentes</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaRegPlusSquare></FaRegPlusSquare>

                <Navbar.Brand href="#home">Mesclar e corrigir</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaSortDown></FaSortDown>

                <Navbar.Brand href="#home">Marcadores</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaFileImport></FaFileImport>

                <Navbar.Brand href="#home">Importar</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaFileExport></FaFileExport>

                <Navbar.Brand href="#home">Exportar</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaPrint></FaPrint>

                <Navbar.Brand href="#home">Imprimir</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaFolderOpen></FaFolderOpen>

                <Navbar.Brand href="#home">Outros contatos</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg="dark" variant="dark">
            <Container>
              <IconRow>
                <FaTrash></FaTrash>

                <Navbar.Brand href="#home">Lixeira</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    </MenuContext.Provider>
  );
};

export { MenuContextProvider };
export default MenuContext;
