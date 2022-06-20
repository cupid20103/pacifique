import styled from "styled-components";
import visionBG from "../../../assets/images/vision_bg.png";

export const VisionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  background-image: url(${visionBG});
  background-size: 100% 75%;
  background-position: bottom;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 50px;
  }
`;

export const VisionLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: 48px;
    line-height: 32px;
    font-weight: 400;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100%;
    padding-top: 50px;
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
  }
`;

export const VisionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  letter-spacing: 1px;
  p {
    font-family: Forum;
    padding: 25px 0;
    font-weight: 400;
    line-height: 18px;
  }
  @media screen and (max-width: 1024px) {
    p {
      padding: 15px 0px;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    p {
      padding: 0;
    }
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 12px;
    }
  }
`;

export const VisionImages = styled.div`
  img {
    width: 250px;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 200px;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0;
    img {
      width: 200px;
      height: auto;
    }
  }
`;

export const VisionRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
