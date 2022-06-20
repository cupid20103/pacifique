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
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  img {
    width: 65%;
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
  align-items: center;
  text-align: center;
  padding: 0 50px;
  h3 {
    font-size: 56px;
    letter-spacing: 2px;
    line-height: 1.2;
    font-weight: 500;
    text-transform: uppercase;
  }
  b {
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 1.2;
    font-weight: 500;
  }
  p {
    font-family: Forum;
    line-height: 1.5;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 15px;
    h3 {
      font-size: 52px;
    }
    p {
      font-size: 14px;
    }
    b {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 85%;
    padding: 30px;
    h3 {
      font-size: 48px;
    }
    b {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 15px;
    h3 {
      font-size: 36px;
    }
    b {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }
`;
