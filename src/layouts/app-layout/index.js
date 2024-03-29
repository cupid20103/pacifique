import React from "react";
// @import components
import AppHeader from "./header";

const AppLayout = (props) => {
  return (
    <>
      <AppHeader />
      {props.children}
    </>
  );
};

export default AppLayout;
