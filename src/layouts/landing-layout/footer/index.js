import React from "react";
import {
  ActionLink,
  Actions,
  FooterContainer,
  FooterWrapper,
} from "./footer.styled";

const LandingFooter = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>{"PACIFIQUE AV © 2022 | All Rights Reserved"}</p>
        <Actions>
          <ActionLink href={"mailto:hello@pacifiqueav.com"}>
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
