export type ContatoContextType = {
  isOpen: boolean;
  idContato: number;

  open: React.Dispatch<React.SetStateAction<number>>;
  close: React.Dispatch<React.SetStateAction<boolean>>;
};

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
}
