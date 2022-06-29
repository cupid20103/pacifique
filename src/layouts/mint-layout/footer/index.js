import React from "react";
// @import styles
import {
  ActionLink,
  Actions,
  FooterContainer,
  FooterWrapper,
} from "./mintfooter.styled";

const LandingFooter = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>{"PACIFIQUE AV © 2022 | All Rights Reserved"}</p>
        <Actions>
          <ActionLink email={"hello@pacifiqueav.com"} obfuscated={true}>
            {"Contact"}
          </ActionLink>
          <ActionLink>{"Imprint"}</ActionLink>
          <ActionLink>{"Privacy Policy"}</ActionLink>
        </Actions>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default LandingFooter;
