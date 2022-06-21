import styled from "styled-components";

export const MicrocosmContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MicrocosmContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MicrocosmLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 100px;
  h3 {
    font-size: 48px;
    font-weight: 400;
    line-height: 50px;
    text-transform: uppercase;
  }
  p {
    font-family: Forum;
    padding: 25px 0;
    font-weight: 400;
    line-height: 18px;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0 25px;
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
    width: 100%;
    h3 {
      font-size: 32px;
      line-height: 1.2;
    }
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const MicrocosmRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 50px;
  img {
    width: 50%;
  }
  h3 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 400;
    text-transform: uppercase;
    padding-top: 25px;
    width: 50%;
  }
  @media screen and (max-width: 1024px) {
    h3 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 30px 0;
    h3 {
      font-size: 32px;
      line-height: 1.2;
      width: 100%;
    }
  }
  @media screen and (max-width: 425px) {
    padding: 15px 0;
    h3 {
      font-size: 24px;
    }
  }
`;

export const ActionGroup = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 25px;
  a {
    border: 1px solid #5a5b44;
    border-radius: 50%;
    background-color: #5a5b44;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #ffefd1;
      svg {
        color: #5a5b44;
      }
    }
    transition: all 0.5s ease;
    svg {
      color: #ffefd1;
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (max-width: 425px) {
    a {
      width: 25px;
      height: 25px;
    }
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export const MicrocosmFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  p {
    letter-spacing: 1px;
  }
  @media screen and (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    bottom: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > :first-child {
    padding: 0 100px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    & > * {
      padding: 0 5px !important;
    }
  }
`;

export const ActionLink = styled.a`
  padding: 0 10px;
  cursor: pointer;
`;
