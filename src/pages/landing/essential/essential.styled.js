import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Link } from "react-router-dom";
import arrow from "../../../assets/images/arrow.svg";

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
  height: 75%;
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
  transform: ${(props) => (!props.isCurrent ? "scale(1)" : "scale(1.1)")};
  transition: all 0.5s ease;
  @media screen and (min-width: 1440px) {
    transform: ${(props) => (props.isCurrent ? "scale(1)" : "scale(1.1)")};
  }
`;

export const SlideText = styled.p`
  margin-top: 50px;
  opacity: ${(props) => (props.isCurrent ? 0.4 : 1)};
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

export const EssentialAction = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoveAction = styled.div`
  width: 5rem;
  height: 2.5rem;
  margin-right: 1rem;
  border-style: solid;
  border-width: 1px;
  border-color: #242022;
  border-radius: 100vw;
  background-image: url(${arrow});
  background-position: 50% 50%;
  background-size: 30%;
  background-repeat: no-repeat;
  transition: all 0.2s ease;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    width: 3rem;
    height: 2rem;
  }
  &.prev {
    opacity: ${(props) => (props.current === 0 ? 0.4 : 1)};
    transform: rotate(-180deg);
  }
  &.next {
    opacity: ${(props) => (props.current === 6 ? 0.4 : 1)};
    @media screen and (min-width: 425px) {
      opacity: ${(props) => (props.current === 5 ? 0.4 : 1)};
    }
    @media screen and (min-width: 1440px) {
      opacity: ${(props) => (props.current === 4 ? 0.4 : 1)};
    }
  }
`;
