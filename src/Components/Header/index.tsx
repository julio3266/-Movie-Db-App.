import React from "react";
import * as Styled from "./styles";

interface IHeader {
  title: string;
  placeholderTitle: string;
}

export const Header: React.FC<IHeader> = ({ title, placeholderTitle }) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Input placeholder={placeholderTitle} />
    </Styled.Container>
  );
};
