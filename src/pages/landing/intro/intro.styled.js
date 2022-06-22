import styled from "styled-components";

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`;

export const IntroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  img {
    width: 7%;
  }
  h3 {
    font-weight: 400;
    font-size: 48px;
    line-height: 50px;
    width: 30%;
    text-transform: uppercase;
  }
  p {
    width: 30%;
    font-family: "Forum";
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    padding-left: 10%;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 38px;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 28px;
      line-height: 1.2;
      width: 40%;
    }
    p {
      font-size: 14px;
      width: 40%;
      line-height: 1.2;
      word-break: break-all;
    }
    img {
      width: 20%;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const IntroFooter = styled.div`
  width: 100%;
  background-color: #5a5b44;
  padding: 20px 20px;
`;

export const IntroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
