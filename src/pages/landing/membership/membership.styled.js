import styled from "styled-components";

export const MemberContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
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

export const MemberContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 5%;
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
  }
  b {
    font-family: Maragsa;
  }
  p {
    font-family: Forum;
    line-height: 18px;
  }
  @media screen and (max-width: 1024px) {
    padding-right: 0;
    h3 {
      font-size: 40px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 50px 0;
    align-items: center;
    text-align: center;
    h3 {
      font-size: 32px;
      line-height: 1.2;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const MemberActions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;
