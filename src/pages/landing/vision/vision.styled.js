import styled from "styled-components";

export const VisionContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
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

export const VisionLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 85px;
  padding-right: 20%;
  h3 {
    font-size: 32px;
    line-height: 32px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 135px;
    padding-right: 0;
    h3 {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 50px;
    h3 {
      font-size: 24px;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 20px;
    }
  }
`;

export const VisionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    font-family: Forum;
    line-height: 18px;
  }
  @media screen and (max-width: 1024px) {
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    p {
      width: 100%;
    }
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 12px;
    }
  }
`;

export const VisionRight = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 150px;
  @media screen and (max-width: 1024px) {
    padding-top: 200px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 50px 0;
  }
`;

export const VisionImages = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  img {
    width: 350px;
    height: auto;
  }
  @media screen and (max-width: 1024px) {
    img {
      width: 250px;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;
