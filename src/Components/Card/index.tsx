import React from "react";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

export interface ICard {}

const data = [
  {
    Row: [
      {
        backgroundUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh4VkJ-1GlA_-OTol2NLbSNd5DTwQtWJDc2C_L-trGB0ZIIkT",
      },
      {
        backgroundUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      },
      {
        backgroundUrl:
          "https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF",
      },
      {
        backgroundUrl:
          "https://m.media-amazon.com/images/I/81zddMLIeaL._AC_SY606_.jpg",
      },
      {
        backgroundUrl:
          "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      },
    ],
  },
  {
    Row: [
      {
        backgroundUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh4VkJ-1GlA_-OTol2NLbSNd5DTwQtWJDc2C_L-trGB0ZIIkT",
      },
      {
        backgroundUrl:
          "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      },
      {
        backgroundUrl:
          "https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF",
      },
      {
        backgroundUrl:
          "https://m.media-amazon.com/images/I/81zddMLIeaL._AC_SY606_.jpg",
      },
      {
        backgroundUrl:
          "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      },
    ],
  },
];

export const Card: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Styled.Column>
      {data?.map((manyRow) => {
        return (
          <Styled.Row>
            {manyRow?.Row?.map((cardItem) => {
              return (
                <Styled.Card onClick={() => navigate("/detalhes")}>
                  <Styled.Image src={cardItem.backgroundUrl} />
                </Styled.Card>
              );
            })}
          </Styled.Row>
        );
      })}
    </Styled.Column>
  );
};
