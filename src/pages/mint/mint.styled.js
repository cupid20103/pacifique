import styled from "styled-components";
import mint from "../../assets/images/mint.png";
import mintform from "../../assets/images/form.svg";

export const MintFormContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5a5b44;
  color: #ffefd1;
  position: relative;
  padding-top: 75px;
  background-image: url(${mint});
  background-size: 100% 65%;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const MintFormContent = styled.div`
  width: 35%;
  height: 90%;
  background-image: url(${mintform});
  background-size: 100% 100%;
  @media screen and (max-width: 1240px) {
    width: 40%;
  }
  @media screen and (max-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    height: 75%;
  }
`;

export const MintFormDisplay = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 125px;
  @media screen and (max-width: 1024px) {
    font-size: 120px;
  }
  @media screen and (max-width: 768px) {
    font-size: 100px;
  }
  @media screen and (max-width: 425px) {
    font-size: 68px;
  }
`;

export const MintFormMain = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const MintFormHand = styled.img`
  width: 50%;
  height: auto;
`;

export const MintFormData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MintFormPrice = styled.div`
  border-top: 2px solid rgb(254, 239, 208);
  border-bottom: 2px solid rgb(254, 239, 208);
  padding: 5px 0;
  font-size: 24px;
  letter-spacing: 3px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;

export const MintFormAmount = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 12px;
    }
  }
`;

export const ConnectWallet = styled.div`
  background-color: rgb(254, 239, 208);
  color: #333;
  border-radius: 10px;
  padding: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    color: #ffefd1;
    background-color: #5a5b44;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
    padding: 5px;
  }
`;
