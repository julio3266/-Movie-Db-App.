import React from "react";
import { Header } from "../../Components/Header";
import { useLocation } from "react-router-dom";
import * as Styled from "./styles";

export const MoviesDetails: React.FC = () => {
  const location = useLocation();
  return (
    <Styled.Container>
      <Header isSearch={false} />
      <Styled.Content>
        <Styled.Img src={`${location.state.poster}`} />
        <Styled.ContentDescription>
          <Styled.Title>{location.state.title}</Styled.Title>
          <Styled.Description>{location.state.description}</Styled.Description>
          <Styled.Footer>
            <Styled.ContentDescription>
              <Styled.TitleDefault>Rating</Styled.TitleDefault>
              <Styled.Rating>{location.state.rating}</Styled.Rating>
            </Styled.ContentDescription>
          </Styled.Footer>
        </Styled.ContentDescription>
      </Styled.Content>
    </Styled.Container>
  );
};
