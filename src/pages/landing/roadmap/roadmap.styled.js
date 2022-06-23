import styled from "styled-components";

export const RoadmapContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`;

export const RoadmapLeft = styled.div`
  width: ${(props) => (props.isMobile ? "100%" : "40%")};
  height: 100%;
  position: relative;
`;

export const RoadmapLeftContent = styled.div`
  width: 100%;
  height: ${(props) => (props.isMobile ? "auto" : "calc(100vh - 75px)")};
  top: ${(props) => (props.isMobile ? "auto" : "75px")};
  position: ${(props) => (props.isMobile ? "auto" : "sticky")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  h3 {
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    text-transform: uppercase;
    color: #ffefd1;
  }
  p {
    font-family: Forum;
    padding: 25px 0;
    font-weight: 400;
    line-height: 18px;
    color: #ffefd1;
    width: 60%;
  }
  img {
    width: 40%;
    height: auto;
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
    padding-bottom: 30px;
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
  width: ${(props) => (props.isMobile ? "100%" : "60%")};
  height: 100%;
  position: relative;
`;

export const RoadmapRightContent = styled.div`
  width: 100%;
  height: ${(props) => (props.isMobile ? "auto" : "calc(100vh - 75px)")};
  top: ${(props) => (props.isMobile ? "auto" : "75px")};
  position: ${(props) => (props.isMobile ? "auto" : "sticky")};
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #ffefd1;
  font-weight: 400;
  p {
    font-family: Forum;
    font-size: 16px;
  }
  @media screen and (max-width: 1440px) {
    b,
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
  }
  @media screen and (max-width: 425px) {
    b,
    p {
      font-size: 12px;
    }
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
    width: 3px;
    height: 85%;
    background-color: #ffefd1;
    top: 0px;
    bottom: 0px;
    border-radius: 50px;
    left: 50%;
  }
  @media screen and (max-width: 1240px) {
    width: 95%;
    :after {
      height: 95%;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    :after {
      height: auto;
    }
    & :nth-child(12) {
      top: -130px;
    }
  }
  @media screen and (max-width: 768px) {
    height: auto;
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
