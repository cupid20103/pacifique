import React from "react";
// @import styles
import { SectionContainer } from "./section.styled";

const Section = (props) => {
  return (
    <SectionContainer
      id={props.id}
      color={props.color}
      paddingTop={props.paddingTop ? props.paddingTop : "75px"}
      image={props.image}
      height={props.height ? props.height : "100vh"}
    >
      {props.children}
    </SectionContainer>
  );
};

export default Section;
