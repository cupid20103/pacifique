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
      image2={props.image2}
      bgsize={props.bgsize ? props.bgsize : "100% 100%"}
      mbgsize={props.mbgsize ? props.mbgsize : "100% 100%"}
      bgpos={props.bgpos ? props.bgpos : "center"}
      height={props.height ? props.height : "100vh"}
    >
      {props.children}
    </SectionContainer>
  );
};

export default Section;
