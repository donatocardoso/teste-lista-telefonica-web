import React, { useContext, useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { ApiTokiToki } from "../../apis";
import ContatoContext from "../../contexts/contato/context";
import { ContatoType } from "../../contexts/contato/reducer";
import { MainLayoutContextProvider } from "../../layouts/main";

const ContatoGrid: React.FC = () => {
  //estados criados para armazenar o conteudo digitado dos inputs
  const [contatos, setContatos] = useState<ContatoType[]>([]);

  //usando o useContext para capturar as propriedades do ContatoContext
  const { setState: setGlobalState } = useContext(ContatoContext);

  //função que ira submeter a alteração do estado global da aplicação
  function fetchContatos() {
    ApiTokiToki.get("/contato")
      .then(({ data }: any) => {
        setContatos(data.content);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if(!contatos.length) fetchContatos();
  }, [contatos]);


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
          {contatos?.length
            ? contatos.map(contato => (
              <tr>
                <td>{contato.Nome}</td>
                <td>{contato.Email}</td>
                <td>{contato.Celular}</td>
                <td>{contato.Telefone}</td>
                <td>{contato.Marcadores}</td>
                <td></td>
              </tr>
            ))
            : (
              <tr>
                <td colSpan={6}>Nenhum contato encontrato...</td>
              </tr>
            )}
        </tbody>
      </Table>
    </MainLayoutContextProvider>
  );
};

export default ContatoGrid;
