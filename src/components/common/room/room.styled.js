import styled from "styled-components";

export const RoomContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #000;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 75%;
    }
  }
  @media screen and (max-width: 425px) {
    img {
      width: 85%;
    }
  }
`;

export const RoomText = styled.div`
  width: 100%;
  text-align: left;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: #000;
  h3 {
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    text-transform: uppercase;
  }
  b {
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
  }
  P {
    font-family: Forum;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    word-break: break-all;
  }
  @media screen and (max-width: 1200px) {
    h3 {
      min-height: 60px;
    }
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 28px;
    }
    b {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    padding-top: 15px;
    align-items: center;
    h3 {
      font-size: 24px;
      min-height: auto;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 20px;
    }
    b {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;
