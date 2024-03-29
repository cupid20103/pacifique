import styled from "styled-components";

export const FAQContainer = styled.div`
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

export const FAQLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border-right: none;
    padding-top: 50px;
    img {
      width: 35%;
    }
  }
`;

export const FAQRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
    color: #ffefd1;
  }
  p {
    font-family: Forum;
    line-height: 18px;
    padding-bottom: 15px;
    color: #ffefd1;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 50px 0;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;
