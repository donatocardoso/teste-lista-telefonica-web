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

export enum Themes {
  Light = "light",
  Dark = "dark"
}

// Criando o tipo do contexto
type MenuContextType = {
  theme: "light" | "dark";

  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
};

// Criando o contexto inicial
export const MenuContext = createContext<MenuContextType>({
  theme: Themes.Dark,

  setTheme: () => {}
});

// Criando o manipulador do contexto
const Menu: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(Themes.Dark);

  return (
    <MenuContext.Provider value={{ theme, setTheme }}>
      <Navbar fixed="top" bg={theme} expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Navbar bg={theme} variant={theme}>
            <Container>
              <IconRow>
                <FaRegUser></FaRegUser>

                <Navbar.Brand href="/">Contatos</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg={theme} variant={theme}>
            <Container>
              <IconRow>
                <FaUndo></FaUndo>

                <Navbar.Brand href="#home">Contatos frequentes</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg={theme} variant={theme}>
            <Container>
              <IconRow>
                <FaRegPlusSquare></FaRegPlusSquare>

                <Navbar.Brand href="#home">Mesclar e corrigir</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg={theme} variant={theme}>
            <Container>
              <IconRow>
                <FaSortDown></FaSortDown>

                <Navbar.Brand href="#home">Marcadores</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg={theme} variant={theme}>
            <Container>
              <IconRow>
                <FaFileImport></FaFileImport>

                <Navbar.Brand href="#home">Importar</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg={theme} variant={theme}>
            <Container>
              <IconRow>
                <FaFileExport></FaFileExport>

                <Navbar.Brand href="#home">Exportar</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg={theme} variant={theme}>
            <Container>
              <IconRow>
                <FaPrint></FaPrint>

                <Navbar.Brand href="#home">Imprimir</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg={theme} variant={theme}>
            <Container>
              <IconRow>
                <FaFolderOpen></FaFolderOpen>

                <Navbar.Brand href="#home">Outros contatos</Navbar.Brand>
              </IconRow>
            </Container>
          </Navbar>

          <Navbar bg={theme} variant={theme}>
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

export default Menu;
