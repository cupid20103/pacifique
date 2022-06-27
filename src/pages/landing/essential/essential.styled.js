import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Link } from "react-router-dom";

export const EssentialContainer = styled.div`
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

export const EssentialLeft = styled.div`
  width: 50%;
  height: 100%;
  padding: 50px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const EssentialContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const EssentialSlider = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  p {
    text-align: center;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
  border-radius: 15px;
`;

export const FooterImage = styled.img`
  width: auto;
  height: 75px;
`;

export const EssentialRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
  }
  p {
    width: 85%;
    font-family: Forum;
    line-height: 18px;
    padding-bottom: 15px;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    p {
      width: 100%;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 50px;
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
