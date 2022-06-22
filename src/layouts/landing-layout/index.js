import React from "react";
import LandingHeader from "./header";
import { Overlay } from "./init.styeld";

const LandingLayout = (props) => {
  return (
    <>
      <Overlay>
        <div className="welcome">{"Welcome"}</div>
      </Overlay>
      <LandingHeader />
      {props.children}
    </>
  );
};

export default LandingLayout;
