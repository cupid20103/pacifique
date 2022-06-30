import styled from "styled-components";
import { Link } from "react-scroll";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  z-index: 200;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
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

export const HeaderColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isOpened || props.nav ? "100%" : "0")};
  background: #5a5b44;
  transition: 2s ease;
  z-index: -50;
`;

export const HeaderAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffefd1;
  cursor: pointer;
  p {
    visibility: hidden;
  }
  &:hover {
    p {
      visibility: visible;
    }
  }
  @media screen and (max-width: 425px) {
    p {
      font-size: 12px;
    }
  }
`;

export const HeaderCircle = styled.div`
  width: 15px;
  height: 15px;
  background: #ffefd1;
  border-radius: 50%;
  margin-right: 5px;
`;

export const HeaderClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffefd1;
  cursor: pointer;
  svg {
    color: #ffefd1;
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  width: 100%;
  height: ${(props) => (props.isOpened ? "100vh" : 0)};
  top: 0;
  left: 0;
  background: #ffefd1;
  overflow-x: hidden;
  transition: 2s ease;
  z-index: -100;
`;

export const MenuActions = styled.div`
  width: 50%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
  @media screen and (max-width: 1024px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuPageActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
  transform: translateY(120px);
  transition: all 1s ease-in-out;
  a {
    padding: 5px 0;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  &.active-function {
    opacity: 1;
    transform: translateY(0px);
  }
  & > :last-child {
    padding-top: 50px;
  }
  @media screen and (max-width: 1024px) {
    a {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 768px) {
    align-items: center;
  }
  @media screen and (max-width: 425px) {
    margin-top: -50px;
    a {
      font-size: 24px;
    }
  }
`;

export const MenuContactActions = styled.div`
  position: absolute;
  bottom: 10px;
  right: 50%;
  font-family: Forum;
  opacity: 0;
  transform: translateY(120px);
  transition: all 1s ease-in-out;
  a {
    padding: 0 10px;
    transition: all 0.5s ease;
    &:hover {
      color: #000;
    }
  }
  &.active-function {
    opacity: 1;
    transform: translateY(0px);
  }
  & > :not(:last-child) {
    border-right: 2px solid #5a5b44;
  }
  @media screen and (max-width: 1024px) {
    a {
      padding: 0 5px;
    }
  }
  @media screen and (max-width: 768px) {
    right: auto;
  }
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const MenuImage = styled.img`
  width: 50%;
  height: 100%;
  opacity: 0;
  transition: all 1s ease-in-out;
  &.active-function {
    opacity: 1;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderTitle = styled(Link)`
  color: #ffefd1;
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    font-size: 16px;
    text-align: center;
  }
`;
