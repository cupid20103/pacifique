import React from "react";
import { Link } from "react-router-dom";
import Header from "../../common/header";
import { HeaderTitle } from "../../common/header/header.styled";

const AppHeader = () => {
  return (
    <Header
      title={
        <HeaderTitle as={Link} to={"/"}>
          {"Pacifique AV"}
        </HeaderTitle>
      }
      renderLinks={(onNavigate) => (
        <>
          <Link to={"/"} onClick={onNavigate}>
            {"FAQ"}
          </Link>
          <Link to={"/"} onClick={onNavigate}>
            {"Places"}
            <span>{"Coming soon"}</span>
          </Link>
          <a
            href={"https://pacifiqueav.medium.com/"}
            target={"_blank"}
            rel="noreferrer"
          >
            {"JOURNAL"}
            <span>{"Medium link"}</span>
          </a>
          <Link to={"/"} onClick={onNavigate}>
            {"Boutique"}
            <span>{"Coming soon"}</span>
          </Link>
        </>
      )}
    />
  );
};

export default AppHeader;
