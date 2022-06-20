import styled from "styled-components";

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AnswerLeft = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  a {
    text-decoration: underline !important;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 0px;
  }
`;

export const AnswerRight = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 0px;
  }
`;
