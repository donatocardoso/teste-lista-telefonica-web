import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ApiTokiToki } from "../../apis";
import { ContatoType } from "../../contexts/contato/reducer";
import { MainLayoutContextProvider } from "../../layouts/main";

const ContatoGrid: React.FC = () => {
  const [contatos, setContatos] = useState<ContatoType[]>([]);
  
  function fetchContatos() {
    ApiTokiToki.get("/contato")
      .then(({ data }: any) => {
        setContatos(data.content);        
      })
      .catch((err) => {
        console.log(err);        
      });
  }

  useEffect(() => {
    if (!contatos.length) fetchContatos();
  }, [contatos]);

  return (
    <MainLayoutContextProvider>
      <Table bordered={false} borderless={false} hover={true}>
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
          {contatos?.length ? (
            contatos.map((contato) => (
              <tr key={contato.Id}>
                <td>{contato.Nome}</td>
                <td>{contato.Email}</td>
                <td>{contato.Celular}</td>
                <td>{contato.Telefone}</td>
                <td>{contato.Marcadores}</td>
                <td></td>
              </tr>
            ))
          ) : (
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
