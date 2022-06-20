import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: fit-content;
  background-color: #a3a38b;
  padding: 0 100px;
  color: #333;
  padding-top: 75px;
  z-index: 100;
`;

export const DescriptionContainer = styled.div`
  padding: 0 75px 50px;
  position: relative;
  h3 {
    font-size: 24px;
    text-transform: uppercase;
  }
  p {
    font-size: 16px;
    font-family: Forum;
  }
  img {
    position: absolute;
    right: 10%;
    bottom: 0%;
    width: 35%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 50px;
    h3 {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 20px;
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

export const DescriptionContent = styled.div`
  padding-bottom: 15px;
  border-bottom: 2px solid #333;
`;
