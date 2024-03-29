import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as To } from "react-scroll";

export const ActionContainer = styled(Link)`
  font-family: "Forum";
  font-size: 18px;
  line-height: 20px;
  color: ${(props) => props?.fcolor};
  background-color: ${(props) => props?.bgcolor};
  border: 1px solid ${(props) => props?.bcolor};
  padding: 5px 20px;
  text-align: center;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props?.bgcolor};
    background-color: ${(props) => props?.fcolor};
  }
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

export const ActionContainerScroll = styled(To)`
  font-family: "Forum";
  font-size: 18px;
  line-height: 20px;
  color: #ffefd1;
  color: ${(props) => props?.hacolor};
  background-color: transparent;
  border: 1px solid ${(props) => props?.hacolor};
  padding: 5px 20px;
  text-align: center;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props?.hfcolor};
    background-color: ${(props) => props?.hacolor};
  }
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
