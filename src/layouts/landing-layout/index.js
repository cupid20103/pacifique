import React from "react";
// @import components
import LandingHeader from "./header";
import LandingFooter from "./footer";
// @import styles
import { Overlay } from "./init.styeld";

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
