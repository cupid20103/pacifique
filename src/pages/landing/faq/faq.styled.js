import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
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
  padding: 50px;
  img {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border-right: none;
    padding-bottom: 30px;
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
    font-weight: 400;
    line-height: 50px;
    text-transform: uppercase;
    color: #ffefd1;
    width: 50%;
  }
  p {
    font-family: Forum;
    padding: 25px 0;
    font-weight: 400;
    line-height: 18px;
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
    padding: 30px 0;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 15px 0;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;
