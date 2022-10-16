import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
`;

export const Title = styled.p`
  font-size: 22px;
  text-align: left;
`;

export const Input = styled.input`
  width: 20%;
  height: 28px;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.white};
  @media (min-width: 375px) and (max-width: 500px) {
    width: 45%;
    height: 28px;
    border-radius: 8px;
    border-color: ${({ theme }) => theme.colors.white};
    border-width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 501px) and (max-width: 700px) {
    width: 35%;
    height: 28px;
    border-radius: 8px;
    border-color: ${({ theme }) => theme.colors.white};
    border-width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 701px) and (max-width: 900px) {
    width: 30%;
    height: 28px;
    border-radius: 8px;
    border-color: ${({ theme }) => theme.colors.white};
    border-width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 901px) and (max-width: 1100px) {
    width: 27%;
    height: 28px;
    border-radius: 8px;
    border-color: ${({ theme }) => theme.colors.white};
    border-width: 1px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
