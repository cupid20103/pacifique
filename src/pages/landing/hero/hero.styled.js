import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HeroBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  video {
    background-size: cover;
    background-position: 50% 50%;
    margin: auto;
    width: 100%;
    height: 100%;
    right: -100%;
    bottom: -100%;
    top: -100%;
    left: -100%;
    object-fit: cover;
    z-index: -100;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  width: 60%;
  height: 100%;
  margin: auto;
  z-index: 0;
  color: #ffefd1;
  text-align: center;
  transition: zoom 1s ease-in-out;
  @keyframes hero {
    80% {
      zoom: 0.8;
    }
    100% {
      zoom: 1;
    }
  }
  h2 {
    font-size: 64px;
    line-height: 65px;
    font-weight: 400;
    text-transform: uppercase;
  }
  img {
    width: 20px;
    padding: 30px 0;
  }
  @media screen and (max-width: 1024px) {
    h2 {
      font-size: 48px;
    }
    img {
      width: 10px;
      padding: 10px 0;
    }
  }
  @media screen and (max-width: 425px) {
    h2 {
      font-size: 36px;
    }
  }
`;

export const HeroSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding: 0 10px;
    font-size: 20px;
    text-transform: uppercase;
  }
  & > :not(:last-child) {
    border-right: 2px solid #ffefd1;
  }
  @media screen and (max-width: 1024px) {
    p {
      font-size: 16px;
      padding: 0 5px;
    }
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 12px;
    }
  }
`;
