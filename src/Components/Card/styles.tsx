import styled from "styled-components";

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;

  @media (min-width: 280px) and (max-width: 710px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 711px) and (max-width: 800px) {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1%;
  width: 20%;
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1%;
    width: 300px;
    height: 35%;
    border-radius: 40px;
    margin-bottom: 5%;
    overflow: hidden;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 711px) and (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1%;
    width: 100%;
    height: 35%;
    border-radius: 40px;
    margin-bottom: 5%;
    overflow: hidden;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 821px) and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1%;
    width: 100%;
    height: 40%;
    border-radius: 40px;
    margin-bottom: 5%;
    overflow: hidden;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 1001px) and (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1%;
    width: 100%;
    height: 40%;
    border-radius: 40px;
    margin-bottom: 5%;
    overflow: hidden;
    max-width: 100%;
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
    border-radius: 10px;
    height: 35%;
    max-height: 89%;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 711px) and (max-width: 820px) {
    width: 100%;
    border-radius: 10px;
    height: 35%;
    max-height: 160px;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 821px) and (max-width: 1000px) {
    width: 100%;
    border-radius: 10px;
    height: 40%;
    max-height: 200px;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  @media (min-width: 1001px) and (max-width: 1300px) {
    width: 100%;
    border-radius: 10px;
    height: 45%;
    max-height: 290px;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
`;
