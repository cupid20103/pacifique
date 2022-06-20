import styled from "styled-components";
import membershipBG from "../../../assets/images/membership_bg.svg";

export const MemberContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
  padding: 0 100px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${membershipBG});
  background-size: 50% 100%;
  background-position: right;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    background-size: 100% 75%;
    padding: 0 50px;
  }
`;

export const MemberContent = styled.div`
  width: 50%;
  h3 {
    width: 65%;
    font-size: 48px;
    line-height: 49px;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    font-family: Forum;
    font-weight: 400;
    line-height: 16px;
  }
  @media screen and (max-width: 1024px) {
    width: 65%;
    h3 {
      width: 75%;
      font-size: 40px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 50px;
    text-align: center;
    h3 {
      width: 100%;
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
  justify-content: space-around;
  align-items: center;
`;
