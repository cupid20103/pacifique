import React from "react";
import { Link } from "react-scroll";
import Header from "../../common/header";
import { HeaderTitle } from "../../common/header/header.styled";

const LandingHeader = () => {
  return (
    <Header
      title={
        <HeaderTitle to={"hero"} smooth={true} duration={1500}>
          {"Pacifique AV"}
        </HeaderTitle>
      }
      renderLinks={(onNavigate) => (
        <>
          <Link to={"faq"} smooth={true} duration={1500} onClick={onNavigate}>
            {"FAQ"}
          </Link>
          <Link
            to={"places"}
            smooth={true}
            duration={1500}
            onClick={onNavigate}
          >
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
          <Link
            to={"boutique"}
            smooth={true}
            duration={1500}
            onClick={onNavigate}
          >
            {"Boutique"}
            <span>{"Coming soon"}</span>
          </Link>
        </>
      )}
    />
  );
};

export default LandingHeader;
