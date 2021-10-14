import { createContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import { LoadBackground } from "./styles";

type LoadType = {
  show: boolean;
};

type PropsLoadContext = {
  state: LoadType;
  setState: React.Dispatch<React.SetStateAction<LoadType>>;
};

const DEFAULT_VALUE = {
  state: {
    show: true
  },
  setState: () => {}
};

const LoadContext = createContext<PropsLoadContext>(DEFAULT_VALUE);

const LoadContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <LoadContext.Provider
      value={{
        state,
        setState
      }}
    >
      <LoadBackground>
        <Spinner animation="border" variant="warning" />
      </LoadBackground>
    </LoadContext.Provider>
  );
};

export { LoadContextProvider };
export default LoadContext;
