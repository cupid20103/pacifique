import styled from "styled-components";

export const MicrocosmContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
  @media screen and (max-width: 1024px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 25px;
  }
`;

export const MicrocosmContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  h3 {
    font-size: 48px;
    line-height: 50px;
    text-transform: uppercase;
  }
  p {
    font-family: Forum;
    padding-bottom: 15px;
    line-height: 18px;
    width: 75%;
  }
  a {
    font-family: "Forum";
    font-size: 18px;
    line-height: 20px;
    color: #ffefd1;
    background-color: #5a5b44;
    border: 1px solid #5a5b44;
    margin-top: 50px;
    padding: 5px 20px;
    text-align: center;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      color: #5a5b44;
      background-color: #ffefd1;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    h3 {
      font-size: 40px;
    }
    p {
      width: 100%;
      font-size: 14px;
    }
    a {
      font-size: 16px;
      padding: 5px 15px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    width: 100%;
    padding-top: 50px;
    h3 {
      font-size: 32px;
      line-height: 1.2;
    }
    a {
      font-size: 14px;
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
    a {
      font-size: 12px;
      margin-top: 25px;
      padding: 5px 10px;
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
  img {
    width: 50%;
  }
  h3 {
    font-size: 48px;
    line-height: 50px;
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
    padding: 50px 0;
    h3 {
      font-size: 32px;
      line-height: 1.2;
      width: 100%;
    }
  }
  @media screen and (max-width: 425px) {
    h3 {
      font-size: 24px;
    }
  }
`;

export const ActionGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
    margin: 5px;
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
      margin: 3px;
      svg {
        width: 15px;
        height: 15px;
      }
    }
  }
`;
