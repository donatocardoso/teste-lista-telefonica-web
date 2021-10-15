import React from "react";
import { Button, Table } from "react-bootstrap";
import { ContatoContext } from ".";
import { ApiTokiToki } from "../../apis";
import { ContatoType } from "../../types/contato";
import { TableRow } from "./styles";

const ContatoGrid: React.FC = () => {
  const context = React.useContext(ContatoContext);

  const [contatos, setContatos] = React.useState<ContatoType[]>(null);

  React.useEffect(() => {
    const fetchContatos = () => {
      ApiTokiToki.get("/contato")
        .then(({ data }: any) => {
          setContatos(data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (!contatos) fetchContatos();
  }, [contatos]);

  if (contatos) {
    return (
      <>
        <Button onClick={() => context.CreateModal.Open()}>Adicionar Contato</Button>

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
            {contatos.length ? (
              contatos.map((contato) => (
                <TableRow key={contato.Id} onClick={() => context.EditModal.Open(contato.Id)}>
                  <td>{contato.Nome}</td>
                  <td>{contato.Email}</td>
                  <td>{contato.Celular}</td>
                  <td>{contato.Telefone}</td>
                  <td>{contato.Marcadores}</td>
                  <td></td>
                </TableRow>
              ))
            ) : (
              <tr>
                <td colSpan={6}>Nenhum contato encontrato...</td>
              </tr>
            )}
          </tbody>
        </Table>
      </>
    );
  } else return <></>;
};

export default ContatoGrid;
