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

export const FriendTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
  }
  b {
    font-size: 20px;
    line-height: 20px;
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
    padding-top: 50px;
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
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 25px;
  @media screen and (max-width: 1024px) {
    gap: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 50px 0;
    grid-template-columns: auto auto;
    gap: 35px;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: auto;
  }
`;
