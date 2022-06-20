import styled from "styled-components";
import nature from "../../../assets/images/nature.jpg";

export const NatureContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 100px;
  background-image: url(${nature});
  background-size: 100% 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    padding: 0 75px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 50px;
  }
`;

export const NatureGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  color: #ffefd1;
  h3 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 400;
  }
  p {
    width: 65%;
    font-family: "Forum";
    font-size: 22px;
    font-weight: 400;
    line-height: 24px;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 100px 0;
    h3 {
      font-size: 32px;
    }
    p {
      width: 100%;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 50px 0;
    h3 {
      font-size: 24px;
      line-height: 1.2;
    }
    p {
      font-size: 16px;
    }
  }
`;
