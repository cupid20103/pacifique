import React from "react";
// @import components
import LandingHeader from "./header";
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
    </>
  );
};

export default LandingLayout;
