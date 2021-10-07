import React, { useContext, useState } from "react";
import { Table } from 'react-bootstrap';
import ContatoContext from "../../context/contato/context";
import { MainLayoutContextProvider } from "../../layouts/main";

const FormData: React.FC = () => {
  //estados criados para armazenar o conteudo digitado dos inputs
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  //usando o useContext para capturar as propriedades do ContatoContext
  const { setState: setGlobalState } = useContext(ContatoContext);

  //função que ira submeter a alteração do estado global da aplicação
  function handleSubmit() {
    setGlobalState({ email, lastName, name });
  }
  
  return (
    <MainLayoutContextProvider>
      <Table
        bordered={false}
        borderless={false}
        hover={true}>
        <thead>
          <tr>
            <th>Título</th>
            <th>E-mail</th>
            <th>Celular</th>
            <th>Telefone</th>
            <th>Marcadores</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </MainLayoutContextProvider>
  );
};

export default FormData;