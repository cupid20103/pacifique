import styled from "styled-components";

export const InspireContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  h3 {
    font-size: 48px;
    color: #ffefd1;
    letter-spacing: 2px;
    line-height: 50px;
    font-weight: 500;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
  }
`;

export const InspireContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-family: Forum;
    font-size: 20px;
    color: #ffefd1;
    letter-spacing: 2px;
    line-height: 22px;
    text-transform: uppercase;
    text-align: center;
  }
  img {
    width: 30%;
  }
  @media screen and (max-width: 1024px) {
    p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 25px 0;
    img {
      width: 50%;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      width: 65%;
    }
    p {
      font-size: 14px;
    }
  }
`;
