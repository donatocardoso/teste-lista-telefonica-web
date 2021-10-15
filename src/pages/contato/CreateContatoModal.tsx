import React, { useState } from "react";
import { Button, FormControl, InputGroup, Modal } from "react-bootstrap";
import { ContatoContext } from ".";

const CreateContatoModal: React.FC = () => {
  const context = React.useContext(ContatoContext);

  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [celular, setCelular] = useState<string>();
  const [telefone, setTelefone] = useState<string>();
  const [marcadores, setMarcadores] = useState<string>();

  const closeModal = () => {
    context.CreateModal.Close();
  };

  React.useEffect(() => {}, [context.CreateModal.IsOpen]);

  if (context.CreateModal.IsOpen) {
    return (
      <Modal show={context.CreateModal.IsOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Criação de Contato</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Nome</InputGroup.Text>
            <FormControl
              aria-label="Nome"
              aria-describedby="inputGroup-sizing-default"
              value={nome}
              onChange={({ target }) => setNome(target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
            <FormControl
              aria-label="Email"
              aria-describedby="inputGroup-sizing-default"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Celular</InputGroup.Text>
            <FormControl
              aria-label="Celular"
              aria-describedby="inputGroup-sizing-default"
              value={celular}
              onChange={({ target }) => setCelular(target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Telefone</InputGroup.Text>
            <FormControl
              aria-label="Telefone"
              aria-describedby="inputGroup-sizing-default"
              value={telefone}
              onChange={({ target }) => setTelefone(target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Marcadores</InputGroup.Text>
            <FormControl
              aria-label="Marcadores"
              aria-describedby="inputGroup-sizing-default"
              value={marcadores}
              onChange={({ target }) => setMarcadores(target.value)}
            />
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Fechar</Button>
          <Button variant="primary">Adicionar Contato</Button>
        </Modal.Footer>
      </Modal>
    );
  } else return <></>;
};

export default CreateContatoModal;
