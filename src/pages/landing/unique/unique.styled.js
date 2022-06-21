import styled from "styled-components";
import unique from "../../../assets/images/unique.png";
import uniqueform from "../../../assets/images/form.svg";

export const UniqueFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${unique});
  background-size: 100% 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 50px 0;
`;

export const UniqueFormDisplay = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  width: 15%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    width: 20%;
  }
  @media screen and (max-width: 768px) {
    width: 25%;
  }
  @media screen and (max-width: 425px) {
    width: 30%;
  }
`;

export const UniqueFormContent = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${uniqueform});
  background-size: 100% 100%;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 55%;
  }
  @media screen and (max-width: 425px) {
    width: 85%;
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
    font-weight: 400;
    line-height: 52px;
    text-transform: uppercase;
  }
  b {
    font-size: 20px;
    font-weight: 400;
    line-height: 22px;
    text-transform: uppercase;
  }
  p {
    font-family: Forum;
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
    h3 {
      font-size: 30px;
    }
    b {
      font-size: 16px;
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
  width: 40%;
  height: auto;
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

export const ConnectWallet = styled.div`
  background-color: rgb(254, 239, 208);
  color: #333;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 15px 0;
    padding: 5px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
