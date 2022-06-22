import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  min-height: 100vh;
  height: fit-content;
  background-color: #a3a38b;
  padding: 75px 100px 50px 100px;
  color: #000;
  z-index: 100;
  img {
    position: absolute;
    height: auto;
    bottom: 50px;
  }
  .back {
    right: 10%;
    width: 35%;
  }
  .orange {
    width: 50px;
    right: 10%;
    bottom: 50px;
    z-index: -100;
  }
  @media screen and (max-width: 1440px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 1024px) {
    .back {
      width: 50%;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 75px 50px 50px 50px;
    .back {
      width: 350px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 75px 25px 25px 25px;
    .back {
      position: absolute;
      right: 0;
      bottom: 25px;
    }
    .orange {
      bottom: 25px;
    }
  }
`;

export const DescriptionContent = styled.div`
  max-width: 1440px;
  padding: 50px;
  h3 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 24px;
    padding-bottom: 25px;
  }
  ul {
    list-style-position: outside;
    padding-left: 15px;
  }
  b {
    font-family: Maragsa;
    font-weight: 400;
    line-height: 18px;
  }
  p {
    font-family: Forum;
    font-weight: 400;
    line-height: 18px;
    word-break: break-all;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 25px;
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

export const DescriptionLine = styled.div`
  height: 3px;
  background-color: #5a5b44;
  width: 80%;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;
