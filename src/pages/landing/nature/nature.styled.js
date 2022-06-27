import styled from "styled-components";

export const NatureContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
  @media screen and (max-width: 1024px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`;

export const NatureGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const NatureContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-top: 50px;
  text-align: right;
  color: #ffefd1;
  h3 {
    font-size: 48px;
    line-height: 48px;
  }
  p {
    font-family: "Forum";
    font-size: 22px;
    line-height: 24px;
    margin: 0;
    padding-bottom: 25px;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 100px;
    h3 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 0;
    h3 {
      font-size: 32px;
      line-height: 1.2;
    }
    p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;
