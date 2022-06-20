import React from "react";
import LandingHeader from "./header";

const LandingLayout = (props) => {
  return (
    <>
      <LandingHeader />
      {props.children}
    </>
  );
};

export default LandingLayout;
