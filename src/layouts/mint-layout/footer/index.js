import React from "react";
// @import styles
import {
  FooterAction,
  FooterActions,
  FooterContainer,
} from "./mintfooter.styled";

const MintFooter = () => {
  return (
    <FooterContainer>
      <p>{"PACIFIQUE AV © 2022 | All Rights Reserved"}</p>
      <FooterActions>
        <FooterAction to={"/"}>{"Contact"}</FooterAction>
        <FooterAction to={"/"}>{"Imprint"}</FooterAction>
        <FooterAction to={"/"}>{"Privacy Policy"}</FooterAction>
      </FooterActions>
    </FooterContainer>
  );
};

export default MintFooter;
