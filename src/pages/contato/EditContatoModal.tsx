import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ContatoContext } from ".";
import { ApiTokiToki } from "../../apis";
import { ContatoType } from "../../types/contato";

const EditContatoModal: React.FC = () => {
  const context = React.useContext(ContatoContext);

  const [contato, setContato] = React.useState<ContatoType>(null);

  const closeModal = () => {
    setContato(null);

    context.EditModal.Close();
  };

  React.useEffect(() => {
    const fetchContato = () => {
      ApiTokiToki.get(`/contato/${context.EditModal.IdContato}`)
        .then(({ data }: any) => {
          setContato(data.content);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (context.EditModal.IsOpen && context.EditModal.IdContato && !contato) fetchContato();
  }, [context.EditModal.IsOpen, context.EditModal.IdContato, contato]);

  if (context.EditModal.IsOpen && context.EditModal.IdContato && contato) {
    return (
      <Modal show={context.EditModal.IsOpen} onHide={closeModal}>
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

export default EditContatoModal;
