import styled from "styled-components";

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
  @media screen and (max-width: 1024px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
    margin-top: 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`;

export const IntroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  img {
    width: 10%;
  }
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
    width: 45%;
  }
  p {
    font-family: "Forum";
    font-size: 20px;
    line-height: 22px;
    width: 45%;
    margin: 0;
    text-align: right;
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
    align-items: center;
    padding-bottom: 25px;
    h3 {
      width: 40%;
      font-size: 28px;
      line-height: 1.2;
      text-align: center;
    }
    p {
      width: 40%;
      font-size: 14px;
      line-height: 1.2;
      text-align: center;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const IntroFooter = styled.div`
  width: 100%;
  height: 75%;
  background-color: #5a5b44;
  padding: 20px 20px;
  @media screen and (max-width: 768px) {
    height: fit-content;
  }
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
