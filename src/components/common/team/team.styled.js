import styled from "styled-components";

export const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TeamAvatar = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.avatar});
  background-size: cover;
  background-position: top;
  @media screen and (max-width: 1024px) {
    height: 250px;
  }
  @media screen and (max-width: 768px) {
    height: 350px;
  }
  @media screen and (max-width: 425px) {
    height: 325px;
  }
`;

export const TeamContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p {
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 1.2;
    margin-bottom: 10px;
    min-height: 35px;
    @media screen and (max-width: 1240px) {
      min-height: 65px;
    }
    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: 12px;
    }
    @media screen and (max-width: 768px) {
      min-height: 35px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const TeamAction = styled.div`
  font-family: "Forum";
  font-size: 18px;
  line-height: 20px;
  color: #5a5b44;
  background-color: #ffefd1;
  border: 1px solid #5a5b44;
  padding: 5px 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: #ffefd1;
    background-color: #5a5b44;
  }
  transition: all 0.5s ease;
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 5px 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export const TeamInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  gap: 20px;
  a {
    border: 1px solid #5a5b44;
    border-radius: 50%;
    background-color: #5a5b44;
    width: 25px;
    height: 25px;
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
      width: 15px;
      height: 15px;
    }
  }
`;
