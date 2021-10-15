import React from "react";
import { Spinner } from "react-bootstrap";
import { LoadBackground } from "./styles";

const LoadComponent: React.FC = () => {
  return (
    <LoadBackground>
      <Spinner animation="border" variant="warning" />
    </LoadBackground>
  );
};

export default LoadComponent;
