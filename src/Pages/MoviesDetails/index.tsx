import React from "react";
import { Header } from "../../Components/Header";
import * as Styled from "./styles";

export const MoviesDetails: React.FC = () => {
  return (
    <Styled.Container>
      <Header isSearch={false} title={"Detalhes / Thor - Love and Thunder "} />
      <Styled.Content>
        <Styled.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh4VkJ-1GlA_-OTol2NLbSNd5DTwQtWJDc2C_L-trGB0ZIIkT" />
        <Styled.ContentDescription>
          <Styled.Title>Thor - Love and Thunder</Styled.Title>
          <Styled.Description>
            Thor: Amor e Trovão”, da Marvel Studios, encontra o Deus do Trovão
            numa jornada diferente de tudo o que já enfrentou – a procura pela
            paz interior. Mas a reforma de Thor é interrompida por um assassino
            galáctico conhecido como Gorr, o Carniceiro dos Deuses, que procura
            a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda da
            Rei Valkiria, de Korg e da ex-namorada Jane Foster, que – para
            surpresa de Thor – empunha inexplicavelmente o seu martelo mágico,
            Mjolnir, e se intitula a Poderosa Thor. Juntos, eles embarcam numa
            angustiante aventura cósmica para descobrir o mistério da vingança
            do Carniceiro dos Deuses e detê-lo antes que seja tarde demais.
          </Styled.Description>
          <Styled.Footer>
            <Styled.ContentDescription>
              <Styled.TitleDefault>Rating</Styled.TitleDefault>
              <Styled.Rating>7.0</Styled.Rating>
            </Styled.ContentDescription>
            <Styled.ContentDescription>
              <Styled.TitleDefault>Diretor</Styled.TitleDefault>
              <Styled.DirectorTitle>Taika Waititi</Styled.DirectorTitle>
            </Styled.ContentDescription>
          </Styled.Footer>
        </Styled.ContentDescription>
      </Styled.Content>
    </Styled.Container>
  );
};
