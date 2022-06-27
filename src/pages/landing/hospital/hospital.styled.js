import styled from "styled-components";

export const HospitalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: center;
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

export const HospitalLeft = styled.div`
  width: 50%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HospitalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
  }
  p {
    width: 75%;
    font-family: Forum;
    padding-bottom: 15px;
    line-height: 18px;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding-top: 50px;
    h3 {
      font-size: 32px;
      line-height: 1.2;
    }
    p {
      width: 100%;
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

export const HospitalRight = styled.div`
  width: 50%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: fit-content;
    padding: 50px 0;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const HospitalImage = styled.img`
  width: 100%;
  height: 100%;
`;
