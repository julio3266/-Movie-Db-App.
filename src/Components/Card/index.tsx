import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

export interface ICardData {
  // image?: string;
}
export interface ICard {
  cards: ICardData[];
}

export const Card: React.FC<ICard> = ({ cards }) => {
  const navigate = useNavigate();

  return (
    <Styled.Column>
      {cards?.map((cardItem) => {
        return (
          <Styled.Row>
            <Styled.Card onClick={() => navigate("/detalhes")}>
              <Styled.Image
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh4VkJ-1GlA_-OTol2NLbSNd5DTwQtWJDc2C_L-trGB0ZIIkT"
                }
              />
            </Styled.Card>
          </Styled.Row>
        );
      })}
    </Styled.Column>
  );
};
