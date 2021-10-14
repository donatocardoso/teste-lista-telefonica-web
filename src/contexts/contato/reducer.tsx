import { produce } from "immer";

enum ContatoContext {
  LOGIN_REQUEST = "@auth/LOGIN_REQUEST",
  SIGN_IN_REQUEST = "@auth/SIGN_IN_REQUEST",
  LOGIN_ERROR = "@auth/LOGIN_ERROR"
}

type ActionType = {
  type: string;
  payload: object;
};

type ContatoState = {
  contatos: ContatoType[];
};

const reducer: React.Reducer<ContatoState, ActionType> = (state: ContatoState, action: ActionType) => {
  switch (action.type) {
    case ContatoContext.LOGIN_REQUEST:
      return produce(state, (draft) => {});

    case ContatoContext.SIGN_IN_REQUEST:
      return produce(state, (draft) => {});

    case ContatoContext.LOGIN_ERROR:
      return produce(state, (draft) => {});

    default:
      throw new Error();
  }
};

export type ContatoType = {
  Nome: string;
  Email: string;
  Celular: string;
  Telefone: string;
  Marcadores: string[];
};

export default reducer;
