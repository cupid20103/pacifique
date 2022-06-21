import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Link } from "react-router-dom";

export const EssentialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EssentialLeft = styled.div`
  width: 55%;
  height: 100%;
  padding: 50px;
  @media screen and (max-width: 768px) {
    width: 75%;
    padding: 30px;
  }
`;

export const EssentialContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const SwiperContainer = styled(Swiper)`
  height: 100%;
`;

export const EssentialSlider = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  p {
    text-align: center;
  }
`;

export const HeaderImage = styled.img`
  width: 100%;
`;

export const FooterImage = styled.img`
  width: auto;
  height: 75px;
`;

export const EssentialRight = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
  h3 {
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    text-transform: uppercase;
    width: 50%;
  }
  b {
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    padding-bottom: 15px;
  }
  p {
    font-family: Forum;
    padding: 25px 0;
    font-weight: 400;
    line-height: 18px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 30px;
    h3 {
      font-size: 40px;
    }
    p {
      padding: 10px 0;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 30px;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 15px;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;
