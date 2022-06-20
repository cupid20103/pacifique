import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Link } from "react-router-dom";

export const MintContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MintLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 100px;
  @media screen and (max-width: 1024px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 768px) {
    width: 65%;
    border-right: none;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    padding-bottom: 15px;
  }
`;

export const MintSwipers = styled(Swiper)`
  width: 85%;
  @media screen and (max-width: 1024px) {
    width: 95%;
  }
`;

export const MintSwiper = styled.div`
  height: 400px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 300px;
  }
  @media screen and (max-width: 425px) {
    height: 250px;
  }
`;

export const MintOrderAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  padding-top: 25px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding-top: 15px;
  }
  @media screen and (max-width: 425px) {
    font-size: 20px;
    padding-top: 10px;
  }
`;

export const MintOrder = styled.div`
  cursor: pointer;
  padding: 0 25px;
`;

export const MintRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 30px;
  }
  @media screen and (max-width: 425px) {
    padding-top: 15px;
  }
`;

export const MintContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 40px;
    letter-spacing: 2px;
    line-height: 1.2;
    font-weight: 500;
    text-transform: uppercase;
  }
  b {
    font-size: 32px;
    letter-spacing: 2px;
    line-height: 1.2;
    font-weight: 500;
    text-transform: uppercase;
  }
  ul {
    padding-top: 50px;
  }
  p {
    font-family: Forum;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
  }
  li {
    font-family: Forum;
    line-height: 16px;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    h3 {
      font-size: 32px;
    }
    b {
      font-size: 28px;
    }
    ul {
      padding-top: 20px;
    }
    p {
      font-size: 16px;
    }
    li {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
    b {
      font-size: 24px;
    }
    p {
      font-size: 14px;
    }
    li {
      font-size: 12px;
    }
  }
`;

export const ConnectWallet = styled(Link)`
  background-color: #5a5b44;
  color: rgb(255, 237, 204);
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 32px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    padding: 10px 25px;
    font-size: 28px;
  }
  @media screen and (max-width: 768px) {
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 24px;
  }
  @media screen and (max-width: 425px) {
    padding: 10px 15px;
    font-size: 20px;
  }
`;
