import styled from "styled-components";

export const FondationContainer = styled.div`
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
    flex-direction: column;
    padding: 0 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`;

export const FondationLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding-top: 50px;
    img {
      width: 80%;
      height: auto;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      width: 95%;
      height: auto;
    }
  }
`;

export const FondationRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    width: 50%;
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
    color: #ffefd1;
  }
  b {
    font-size: 20px;
    line-height: 20px;
    padding-bottom: 15px;
    color: #ffefd1;
  }
  p {
    width: 85%;
    font-family: Forum;
    line-height: 18px;
    color: #ffefd1;
    word-break: break-all;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    b {
      font-size: 18px;
    }
    p {
      width: 100%;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 50px 0;
    align-items: center;
    text-align: center;
    h3 {
      width: 100%;
      font-size: 32px;
      line-height: 1.2;
    }
    b {
      font-size: 16px;
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
