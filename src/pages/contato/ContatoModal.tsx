import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ContatoContext } from ".";
import { ApiTokiToki } from "../../apis";
import { ContatoType } from "../../types/contato";

const ContatoModal: React.FC = () => {
  const context = React.useContext(ContatoContext);

  const [contato, setContato] = React.useState<ContatoType>(null);

  const closeModal = () => {
    setContato(null);

    context.close(true);
  };

  React.useEffect(() => {
    const fetchContato = () => {
      ApiTokiToki.get(`/contato/${context.idContato}`)
        .then(({ data }: any) => {
          setContato(data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (context.isOpen && context.idContato && !contato) fetchContato();
  }, [context.isOpen, context.idContato, contato]);

  if (context.isOpen && context.idContato && contato) {
    return (
      <Modal show={context.isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edição do Contato #{contato.Id}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Nome: {contato.Nome}</p>
          <p>Email: {contato.Email}</p>
          <p>Celular: {contato.Celular}</p>
          <p>Telefone: {contato.Telefone}</p>
          <p>Marcadores: {contato.Marcadores}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  } else return <></>;
};

export default ContatoModal;
