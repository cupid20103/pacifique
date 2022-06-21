import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IntroLeft = styled.div`
  width: 60%;
  height: 100%;
  padding: 25px;
  background-color: #ddccb2;
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 30px;
  }
`;

export const IntroContent = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  border-bottom: 2px solid #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    text-transform: uppercase;
  }
  b {
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    padding-bottom: 15px;
  }
  p {
    font-family: Forum;
    padding: 25px 0;
    font-weight: 400;
    line-height: 18px;
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

export const IntroRight = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 5px;
  img {
    width: 55%;
    height: auto;
  }
  h3 {
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    text-transform: uppercase;
    padding: 10px 0 15px 0;
  }
  b {
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
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
    width: 80%;
    padding: 30px;
    h3 {
      font-size: 32px;
    }
    b {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 15px;
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
