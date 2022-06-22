import React from "react";
// @import components
import AppHeader from "../app-layout/header";
import MintFooter from "./footer";

const MintLayout = (props) => {
  return (
    <>
      <AppHeader />
      {props.children}
      <MintFooter />
    </>
  );
};

export default MintLayout;
