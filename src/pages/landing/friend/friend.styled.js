import styled from "styled-components";

export const FriendContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 50px;
`;

export const FriendTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    padding-bottom: 15px;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    b {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
    b {
      font-size: 16px;
    }
  }
`;

export const FrinedContent = styled.div`
  width: 85%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 25px;
  @media screen and (max-width: 1024px) {
    width: 95%;
    gap: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    grid-template-columns: auto auto;
    gap: 50px;
  }
  @media screen and (max-width: 425px) {
    width: 75%;
    grid-template-columns: auto;
    gap: 50px;
  }
`;
