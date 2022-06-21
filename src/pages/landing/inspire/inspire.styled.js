import styled from "styled-components";

export const InspireContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  h3 {
    font-size: 48px;
    color: #ffefd1;
    letter-spacing: 2px;
    line-height: 50px;
    font-weight: 500;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
      line-height: 1.2;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px 50px;
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
  }
`;

export const InspireContent = styled.p`
  color: #ffefd1;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0;
    font-size: 16px;
  }
  @media screen and (max-width: 425px) {
    padding: 25px 0;
    font-size: 14px;
  }
`;
