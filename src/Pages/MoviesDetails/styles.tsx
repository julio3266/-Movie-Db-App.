import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
  max-height: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 280px) and (max-width: 1000px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100%;
  }
  @media (min-width: 1001px) and (max-width: 1200px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 40%;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  border-radius: 20px;

  @media (min-width: 280px) and (max-width: 1000px) {
    width: 100%;
    height: 50%;
    max-height: 100%;
    max-width: 100%;
    border-radius: 20px;
  }
  @media (min-width: 1001px) and (max-width: 1200px) {
    width: 100%;
    height: 50%;
    max-height: 100%;
    max-width: 100%;
    border-radius: 20px;
  }
`;

export const ContentDescription = styled.div`
  padding: 3%;
  max-width: 100%;
`;

export const Title = styled.p`
  text-align: start;
  font-size: 35px;
  font-weight: 500;
`;

export const Description = styled.p`
  padding: 1%;
  text-align: start;
  width: 98%;
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  height: 40%;
  width: 98%;
  border-radius: 20px;
  max-height: 100%;
  margin-right: auto;
  margin-left: auto;
  flex-direction: row;
`;

export const TitleDefault = styled.p`
  text-align: center;
  /* margin-bottom: 20px; */
`;

export const Rating = styled.p`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const DirectorTitle = styled.p`
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
