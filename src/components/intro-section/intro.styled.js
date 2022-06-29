import styled from "styled-components";

export const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #5a5b44;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 150px 0 150px;
  @media screen and (max-width: 1024px) {
    padding: 75px 100px 0 100px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 75px 50px 0 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 75px 25px 0 25px;
  }
`;

export const IntroLeft = styled.div`
  width: 50%;
  height: 100%;
  color: #ffefd1;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 50px;
  }
`;

export const IntroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
  }
  b {
    font-size: 20px;
    line-height: 20px;
    padding-bottom: 15px;
  }
  p {
    font-family: Forum;
    line-height: 18px;
    width: 80%;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    b {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 32px;
      line-height: 1.2;
    }
    b {
      font-size: 16px;
    }
    p {
      width: 100%;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
    b {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const IntroRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffefd1;
  background-color: #5a5b44;
  text-align: center;
  img {
    width: 50%;
    height: auto;
  }
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
    padding: 15px 0 25px 0;
  }
  b {
    font-size: 20px;
    line-height: 20px;
    padding-top: 15px;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    b {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 50px 0;
    h3 {
      font-size: 32px;
    }
    b {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      width: 75%;
    }
    h3 {
      font-size: 24px;
    }
    b {
      font-size: 14px;
    }
  }
`;
