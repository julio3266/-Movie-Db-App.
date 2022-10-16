import React from "react";

import { Card } from "../../Components/Card";
import { Header } from "../../Components/Header";

import * as Styled from "./styles";

export const ListMovies: React.FC = () => {
  return (
    <Styled.Container>
      <Header title={"List Movies"} placeholderTitle={"Buscar"} />

      <Card />
    </Styled.Container>
  );
};
