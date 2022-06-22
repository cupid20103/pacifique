import styled from "styled-components";

export const NatureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 100px;
  max-width: 1440px;
  margin: auto;
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
`;

export const NatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  color: #ffefd1;
  h3 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 400;
  }
  p {
    width: 60%;
    font-family: "Forum";
    font-size: 22px;
    font-weight: 400;
    line-height: 24px;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 100px 0;
    h3 {
      font-size: 32px;
      line-height: 1.2;
    }
    p {
      width: 100%;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 50px 0;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
`;
