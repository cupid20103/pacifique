import styled from "styled-components";

export const RoadmapContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px;
  }
`;

export const RoadmapLeft = styled.div`
  width: 50%;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 55%;
  }
  img {
    width: 50%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 50px;
    h3 {
      font-size: 40px;
    }
    p {
      padding: 10px 0;
      font-size: 14px;
      width: 65%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #ffefd1;
    letter-spacing: 2px;
  }
  img {
    width: 80%;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 50px;
    p {
      font-size: 14px;
    }
    img {
      padding-left: 50px;
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 12px;
    }
    /* img {
      width: 120%;
      height: auto;
    } */
  }
`;
