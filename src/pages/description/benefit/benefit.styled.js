import styled from "styled-components";

export const BenefitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const BenefitLeft = styled.div`
  width: 50%;
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

export const BenefitRight = styled.div`
  width: 50%;
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
