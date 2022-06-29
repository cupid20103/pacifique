import styled from "styled-components";
import line from "../../../assets/images/line.svg";

export const RoadmapContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 150px;
  @media screen and (max-width: 1024px) {
    padding: 0 0 0 100px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`;

export const RoadmapLeft = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  padding-left: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 50px;
  }
`;

export const RoadmapLeftContent = styled.div`
  width: 100%;

  min-height: 650px;
  top: 20%;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 50px;
  text-align: left;
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
    color: #ffefd1;
  }
  p {
    font-family: Forum;
    line-height: 18px;
    color: #ffefd1;
    width: 60%;
  }
  img {
    width: 200px;
    height: auto;
    padding-top: 75px;
  }
  @media screen and (max-width: 1440px) {
    height: 100vh;
    top: 75px;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    p {
      padding: 10px 0;
      font-size: 14px;
      width: 80%;
    }
  }
  @media screen and (max-width: 768px) {
    height: auto;
    top: auto;
    position: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 32px;
    }
    p {
      width: 100%;
    }
    img {
      padding: 30px 0;
      width: 35%;
    }
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 15px;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const RoadmapRight = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 50px;
  }
`;

export const RoadmapRightContent = styled.div`
  width: 100%;
  height: 700px;
  min-height: 650px;
  top: 20%;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  color: #ffefd1;
  p {
    font-family: Forum;
    font-size: 16px;
  }
  @media screen and (max-width: 1440px) {
    height: 100vh;
    top: 75px;
    b,
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1024px) {
    b,
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 768px) {
    height: auto;
    top: auto;
    position: auto;
    justify-content: center;
  }
`;

export const RoadmapSteps = styled.div`
  position: relative;
  width: 90%;
  height: 80%;
  & :nth-child(2) {
    top: -10px;
  }
  & :nth-child(3) {
    top: -20px;
  }
  & :nth-child(4),
  & :nth-child(5) {
    top: -40px;
  }
  & :nth-child(6),
  & :nth-child(7) {
    top: -60px;
  }
  & :nth-child(8),
  & :nth-child(9) {
    top: -80px;
  }
  & :nth-child(10),
  & :nth-child(11) {
    top: -100px;
  }
  & :nth-child(12) {
    top: -120px;
  }
  :after {
    content: "";
    position: absolute;
    background-image: url(${line});
    background-repeat: no-repeat;
    background-size: cover;
    width: 3px;
    height: calc(7% * ${(props) => props.nav});
    max-height: 350px;
    top: 0px;
    bottom: 0px;
    border-radius: 50px;
    left: 50%;
  }
  @media screen and (max-width: 1240px) {
    width: 95%;
    :after {
      height: calc(7.5% * ${(props) => props.nav});
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    :after {
      height: calc(8% * ${(props) => props.nav});
    }
    & :nth-child(12) {
      top: -130px;
    }
  }
  @media screen and (max-width: 768px) {
    height: auto;
    :after {
      height: auto;
    }
    & :not(:first-child) {
      top: 0px;
    }
  }
  @media screen and (max-width: 425px) {
    :after {
      left: 10px;
    }
  }
`;

export const RoadmapStep1 = styled.div`
  width: 50%;
  left: 0px;
  position: relative;
  padding: 0 25px;
  text-align: right;
  b,
  p {
    margin: 0;
  }
  :after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    right: 10px;
    top: 5px;
    background-color: #ffefd1;
    border-radius: 50%;
    z-index: 50;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 25px 0 0;
  }
  @media screen and (max-width: 425px) {
    text-align: left;
    width: 100%;
    padding: 0 0 25px 50px;
    :after {
      left: 20px;
    }
  }
`;

export const RoadmapStep2 = styled.div`
  width: 50%;
  left: 50%;
  position: relative;
  padding: 0 25px;
  text-align: left;
  b,
  p {
    margin: 0;
  }
  :after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: 10px;
    background-color: #ffefd1;
    top: 5px;
    border-radius: 50%;
    z-index: 1;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 0 0 25px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    left: 0;
    padding: 0 0 25px 50px;
    :after {
      left: 20px;
    }
  }
`;

export const RoadmapFooter = styled.p`
  @media screen and (max-width: 768px) {
    padding: 15px 0;
  }
`;
