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

type UserType = {
  id: number;
  name: string;
  lastName: string;
  email: string;
};

const reducer: React.Reducer<UserType, ActionType> = (
  state: UserType,
  action: ActionType
) => {
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

export default reducer;
