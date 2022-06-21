import styled from "styled-components";

export const IntroContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    font-family: "Forum";
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    width: 30%;
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
  border-bottom: 2px solid #333;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
