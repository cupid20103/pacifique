import React from "react";
import LandingHeader from "./header";
import LandingFooter from "./footer";
import { Overlay } from "./init.styled";

const LandingLayout = (props) => {
  return (
    <>
      <Overlay>
        <div className="welcome" />
      </Overlay>
      <LandingHeader />
      {props.children}
      <LandingFooter />
    </>
  );
};

export default LandingLayout;
