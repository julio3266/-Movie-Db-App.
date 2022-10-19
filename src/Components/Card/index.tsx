import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

export interface IPoster {
  cards: any[];
  isTitle?: boolean;
  category?: string;
}

export const Card: React.FC<IPoster> = ({ cards, isTitle, category }) => {
  const navigate = useNavigate();

  const handleSelectedCard = (selectedCard: any) => {
    navigate(`/detalhes/${selectedCard.name}`, {
      state: {
        title: selectedCard.name,
        description: selectedCard.description,
        rating: selectedCard.average,
        backdropImage: selectedCard.backdrop,
        poster: selectedCard.poster,
      },
    });
  };

  return (
    <>
      <ScrollMenu
        Header={
          isTitle && <Styled.CategoryTitle>{category}</Styled.CategoryTitle>
        }
      >
        {cards?.map((item, index) => {
          return (
            <Styled.Card
              onClick={() => handleSelectedCard(item)}
              key={index.toString()}
            >
              <Styled.Image src={`${item.poster}`} />
            </Styled.Card>
          );
        })}
      </ScrollMenu>
    </>
  );
};
