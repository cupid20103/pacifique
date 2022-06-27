import styled from "styled-components";
import { Link } from "react-router-dom";
import uniqueform from "../../../assets/images/form.svg";

export const UniqueFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 75px 0;
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const UniqueFormDisplay = styled.div`
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 200px;
    }
  }
  @media screen and (max-width: 768px) {
    top: 50px;
    img {
      width: 150px;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      width: 100px;
    }
  }
`;

export const UniqueFormContent = styled.div`
  width: 650px;
  height: 100%;
  background-image: url(${uniqueform});
  background-size: 100% 100%;
  @media screen and (max-width: 1024px) {
    width: 575px;
  }
  @media screen and (max-width: 768px) {
    width: 350px;
    height: 400px;
  }
  @media screen and (max-width: 425px) {
    width: 300px;
  }
`;

export const UniqueFormMain = styled.div`
  width: 100%;
  height: 95%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 75px;
  }
`;

export const UniqueContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000000;
  h3 {
    font-size: 50px;
    line-height: 52px;
    text-transform: uppercase;
  }
  b {
    font-size: 20px;
    line-height: 22px;
    text-transform: uppercase;
  }
  p {
    font-family: Forum;
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
    h3 {
      font-size: 30px;
    }
    b {
      font-size: 16px;
    }
    p {
      width: 80%;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 20px;
    }
    b {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const UniqueFormHand = styled.img`
  width: 285px;
  height: auto;
  @media screen and (max-width: 1024px) {
    width: 250px;
  }
  @media screen and (max-width: 768px) {
    width: 30%;
    height: auto;
  }
`;

export const UniqueFormData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConnectWallet = styled(Link)`
  background-color: #ffefd1;
  color: #5a5b44;
  padding: 10px;
  margin-top: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    color: #ffefd1;
    background-color: #5a5b44;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 15px 0;
    padding: 5px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
