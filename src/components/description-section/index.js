import React from "react";
// @import styles
import {
  DescriptionContainer,
  DescriptionContent,
  DescriptionWrapper,
} from "./description.styled";

const Description = (props) => {
  return (
    <DescriptionWrapper>
      <DescriptionContainer>
        <h3>{props.title}</h3>
        <DescriptionContent>{props.children}</DescriptionContent>
        {props.img && <img src={props.img} alt="description-background" />}
      </DescriptionContainer>
    </DescriptionWrapper>
  );
};

export default Description;
