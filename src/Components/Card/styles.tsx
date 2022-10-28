import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

export const ScrollView = styled(ScrollMenu)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (min-width: 280px) and (max-width: 710px) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  @media (min-width: 711px) and (max-width: 800px) {
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1%;
  width: 200px;
  padding: 15px;
  height: 350px;
  border-radius: 40px;
  margin-bottom: 1%;
  overflow: hidden;
  max-width: 100%;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (min-width: 375px) and (max-width: 710px) {
    width: 400px;
    height: 500px;
    margin-right: auto;
    margin-left: auto;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 711px) and (max-width: 820px) {
    width: 400px;
    height: 500px;
    margin-right: auto;
    margin-left: auto;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 821px) and (max-width: 1000px) {
    width: 400px;
    height: 500px;
    margin-right: auto;
    margin-left: auto;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 1001px) and (max-width: 1300px) {
    width: 400px;
    height: 500px;
    margin-right: auto;
    margin-left: auto;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  max-height: 89%;
  max-width: 100%;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (min-width: 375px) and (max-width: 710px) {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    max-height: 89%;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 711px) and (max-width: 820px) {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    max-height: 89%;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 821px) and (max-width: 1000px) {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    max-height: 89%;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 1001px) and (max-width: 1300px) {
    width: 100%;
    height: 500px;
    border-radius: 10px;
    max-height: 89%;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
`;

export const CategoryTitle = styled.p`
  padding: 15px;
`;
