import styled from "styled-components";

export const FriendContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FriendLeft = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  img {
    width: 75%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    border-right: none;
    padding-bottom: 30px;
    img {
      width: 50%;
      height: auto;
    }
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 15px;
    img {
      width: 75%;
      height: auto;
    }
  }
`;

export const FriendRight = styled.div`
  width: 60%;
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
  }
  b {
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    padding: 15px 0;
  }
  p {
    font-family: Forum;
    font-weight: 400;
    line-height: 18px;
    width: 75%;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 15px;
    h3 {
      font-size: 40px;
    }
    b {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 85%;
    align-items: center;
    text-align: center;
    padding: 30px;
    h3 {
      font-size: 32px;
    }
    b {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 15px;
    h3 {
      font-size: 24px;
    }
    b {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;
