import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as To } from "react-scroll";

export const ActionContainer = styled(Link)`
  font-family: "Forum";
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: ${(props) => props?.fcolor};
  background-color: ${(props) => props?.bgcolor};
  border: 1px solid ${(props) => props?.bcolor};
  padding: 5px 20px;
  text-align: center;
  margin: 5px;
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
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #ffefd1;
  background-color: transparent;
  border: 1px solid #ffefd1;
  padding: 5px 20px;
  text-align: center;
  margin: 5px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    color: #5a5b44;
    background-color: #ffefd1;
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
