import React from "react";
import * as Styled from "./styles";

interface IHeader {
  title: string;
  placeholderTitle?: string;
  isSearch: boolean;
}

export const Header: React.FC<IHeader> = ({
  title,
  placeholderTitle,
  isSearch,
}) => {
  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      {isSearch && <Styled.Input placeholder={placeholderTitle} />}
    </Styled.Container>
  );
};
