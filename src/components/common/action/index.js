import React from "react";
// @import styles
import { ActionContainer, ActionContainerScroll } from "./action.styled";

const Action = (props) => {
  return (
    <>
      {props.mode !== "scroll" ? (
        <ActionContainer
          to={props.link}
          fcolor={props.cType ? "#ffefd1" : "#5a5b44"}
          bgcolor={props.cType ? "#5a5b44" : "#ffefd1"}
          bcolor={props.faq ? "#ffefd1" : "#5a5b44"}
        >
          {props.content}
        </ActionContainer>
      ) : (
        <ActionContainerScroll to={props.link} smooth={true} duration={1800}>
          {props.content}
        </ActionContainerScroll>
      )}
    </>
  );
};

export default Action;
