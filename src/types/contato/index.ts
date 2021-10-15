type CreateContatoModalContextType = {
  IsOpen: boolean;

  Open: Function;
  Close: Function;
};

type EditContatoModalContextType = {
  IsOpen: boolean;
  IdContato: number;

  Open: Function;
  Close: Function;
};

export type ContatoContextType = {
  CreateModal: CreateContatoModalContextType;
  EditModal: EditContatoModalContextType;
};

export type ContatoType = {
  Id: number;
  Nome: string;
  Email: string;
  Celular: string;
  Telefone: string;
  Marcadores: string[];
};
