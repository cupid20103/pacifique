import React from "react";
// @import resources
import orange from "../../assets/images/orange.svg";
// @import styles
import {
  DescriptionContainer,
  DescriptionContent,
  DescriptionLine,
  DescriptionWrapper,
} from "./description.styled";

const Description = (props) => {
  return (
    <DescriptionWrapper>
      <DescriptionContainer>
        <DescriptionContent>
          <h3>{props.title}</h3>
          {props.children}
        </DescriptionContent>
        <DescriptionLine />
        {props.img && (
          <img
            src={props.img}
            className={"back"}
            alt={"description-background"}
          />
        )}
        <img src={orange} className={"orange"} alt={"orange"} />
      </DescriptionContainer>
    </DescriptionWrapper>
  );
};

export default Description;
