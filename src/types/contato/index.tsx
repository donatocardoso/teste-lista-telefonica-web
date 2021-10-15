export type ContatoType = {
  Id: number;
  Nome: string;
  Email: string;
  Celular: string;
  Telefone: string;
  Marcadores: string[];
};

export interface ContatoModalProps {
  IdContato: number;
};

export type ContatoModalContextType = {
  isOpen: boolean;

  openContatoModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeContatoModal: React.Dispatch<React.SetStateAction<boolean>>;
};
